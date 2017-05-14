interface ITesters {
    twitter: {
        handle (str: string): boolean;
        profile (str: string): boolean;
    }
    player: {
        name (str: string): boolean;
        url (str: string): boolean;
    }
    facebook: {
        name (str: string): boolean;
        profile (str: string): boolean;
    }
    youtube: {
        name (str: string): boolean;
        url (str: string): boolean;
    }
    steam: {
        name (str: string): boolean;
        id (str: string): boolean;
        profileUrl (str: string): boolean;
        customUrl (str: string): boolean;
    }
    instagram: {
        name (str: string): boolean;
        url (str: string): boolean;
    }
    soundcloud: {
        name (str: string): boolean;
        url (str: string): boolean;
    }
    spreadshirt: {
        url (str: string): boolean;
        name (str: string): boolean;
        shop (str: string): boolean;
    }
    patreon: {
        name (str: string): boolean;
        url (str: string): boolean;
    }
}

export const is: ITesters;
