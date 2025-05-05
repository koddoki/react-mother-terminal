export interface RootData {
  folders: Folder[];
  password: string;
}

export interface Folder {
  name: string;
  content: FolderContent;
}

export interface FolderContent {
  title: string;
  text: string;
}
