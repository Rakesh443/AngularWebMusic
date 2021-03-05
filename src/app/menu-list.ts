export class MenuItem {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = ''
    ) {}
}

export const menuList = [
    new MenuItem('Songs', 'songs', 'songs', 'music_note'),
    new MenuItem('Albums', 'albums', 'albums', 'albums'),
    new MenuItem('Mathematics', 'mathematics', 'mathematics class material', 'calculate'),
    new MenuItem('Physics', 'physics', 'physics class material', 'flash_on')
];