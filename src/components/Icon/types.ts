const icons = {
  book: "ion:book",
  calendar: "ion:calendar",
  cancel: "ion:ban",
  check: "ion:checkmark",
  "chevron-left": "ion:chevron-back",
  "chevron-down": "ion:chevron-down",
  "chevron-right": "ion:chevron-right",
  "chevron-up": "ion:chevron-up",
  document: "ion:document",
  "document-text": "ion:document-text",
  documents: "ion:documents",
  edit: "ion:create",
  eye: "ion:eye",
  "eye-off": "ion:eye-off",
  folder: "ion:folder",
  "folder-open": "ion:folder-open",
  filter: "ion:funnel",
  hamburger: "ion:menu",
  options: "ion:options",
  user: "ion:person",
  users: "ion:people",
  search: "ion:search",
  settings: "ion:settings"
} as const

export type IconType = keyof typeof icons

export { icons }
