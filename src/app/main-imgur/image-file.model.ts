export class ImageFile {
    id: number;
    title: string;
    subtitle: string;
    filetype: string;

    constructor(id, title, subtitle, filetype) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.filetype = filetype;
    }
}
