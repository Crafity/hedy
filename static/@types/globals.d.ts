import ace from 'ace-builds';

declare global {
  interface Window {
    State: any;
    editor: ace.Ace.Editor;
    auth: any;
    modal: any;
    UiMessages: any;
    join_class(link, name, noRedirect): void;
    delete_class(id): void;
    rename_class(id): void;
    create_class(): void;
    speak(text): void;
    UiMessages: any;
  }
}
