interface Duck {
    name: string;
    numLegs: number;
    sound: (sound: string) => void;
}

const duck1: Duck = {
    name: "heuy",
    numLegs: 2,
    sound: (sound: any) => console.log(sound)
}

const duck2: Duck= {
    name: "james",
    numLegs: 2,
    sound: (sound: any) => console.log(sound)
}

duck1.sound("hi");

export const ducks = [duck1, duck2]