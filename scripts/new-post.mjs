import { constants } from 'node:fs';
import { access, mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline/promises';

const args = process.argv.slice(2);
const contentDirectory = resolve('src/content/writing');

function getFlagValue(name) {
  const index = args.indexOf(name);
  if (index === -1) return undefined;

  const value = args[index + 1];
  if (!value || value.startsWith('--')) {
    throw new Error(`${name} needs a value.`);
  }

  return value.trim();
}

function makeSlug(value) {
  return value
    .normalize('NFKD')
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function validateDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error('Date must use YYYY-MM-DD.');
  }

  const parsed = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) {
    throw new Error(`${value} is not a valid calendar date.`);
  }
}

function getLocalDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

async function fileExists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

const prompt = createInterface({ input: stdin, output: stdout });

try {
  const title = getFlagValue('--title') ?? (await prompt.question('Title: ')).trim();
  if (!title) throw new Error('Title cannot be empty.');

  const suggestedSlug = makeSlug(title);
  const slugAnswer =
    getFlagValue('--slug') ??
    (await prompt.question(`Slug${suggestedSlug ? ` (${suggestedSlug})` : ''}: `)).trim();
  const slug = makeSlug(slugAnswer || suggestedSlug);
  if (!slug) throw new Error('Slug must contain English letters or numbers.');

  const summary = getFlagValue('--summary') ?? (await prompt.question('One-sentence summary: ')).trim();
  if (!summary) throw new Error('Summary cannot be empty.');

  const kindAnswer = getFlagValue('--kind') ?? (await prompt.question('Kind (Field note): ')).trim();
  const kind = kindAnswer || 'Field note';
  const kickerAnswer = getFlagValue('--kicker') ?? (await prompt.question(`Kicker (${kind}): `)).trim();
  const kicker = kickerAnswer || kind;
  const today = getLocalDate();
  const dateAnswer = getFlagValue('--date') ?? (await prompt.question(`Date (${today}): `)).trim();
  const published = dateAnswer || today;
  validateDate(published);

  const publishAnswer = args.includes('--publish')
    ? 'y'
    : (await prompt.question('Publish in production now? (y/N): ')).trim().toLowerCase();
  const draft = !['y', 'yes'].includes(publishAnswer);
  const filePath = resolve(contentDirectory, `${slug}.md`);

  if (await fileExists(filePath)) {
    throw new Error(`A post already exists at src/content/writing/${slug}.md.`);
  }

  const frontmatter = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `summary: ${JSON.stringify(summary)}`,
    `published: ${published}`,
    `kind: ${JSON.stringify(kind)}`,
    `kicker: ${JSON.stringify(kicker)}`,
    'featured: false',
    `draft: ${draft}`,
    '---',
    '',
    '<p class="lead">Write a short opening that tells readers why this note matters.</p>',
    '',
    '## First section',
    '',
    'Write the note in Markdown.',
    '',
  ].join('\n');

  await mkdir(contentDirectory, { recursive: true });
  await writeFile(filePath, frontmatter, { encoding: 'utf8', flag: 'wx' });

  stdout.write(`\nCreated src/content/writing/${slug}.md\n`);
  stdout.write(`Preview: http://localhost:4321/writing/${slug}/\n`);
  if (draft) stdout.write('When it is ready, change draft: true to draft: false.\n');
  stdout.write('Then run npm run check and git push your commit.\n');
} catch (error) {
  const message = error instanceof Error ? error.message : 'Could not create the post.';
  process.stderr.write(`\n${message}\n`);
  process.exitCode = 1;
} finally {
  prompt.close();
}
