# Conlang Dictionary (Electron App)

A lightweight, offline dictionary app built using Electron. This tool allows you to store, search, sort, and manage custom vocabulary entries between **English** and **Eloihi** — or any fictional/personal language of your choice.

> Data is stored locally in a simple `JSON` file. No servers, no internet needed. Just fast offline access.

---

## Features

- Add new word entries with notes
- Delete entries instantly
- Search by English, Eloihi, or Notes
- Filter search by column
- Sort alphabetically by English or Eloihi
- Persistent local JSON database (`data.json`) (Stored in `C:\Users\<user>\AppData\Roaming\eloihi-dictionary`)
- Designed for custom conlangs or personal vocab tracking

---

## Use Cases

- Your own conlang/dictionary project
- Vocabulary memorization for niche languages
- Note-taking or journaling terms with contextual meanings
- Any two-way dictionary that needs CRUD

---

## Data Model

Each word entry has:
```json
{
  "english": "word in English",
  "eloihi": "word in Eloihi",
  "notes": "optional context or usage"
}
```
```
npm install
npm start
npm run build (For creating installable .exe)
```
