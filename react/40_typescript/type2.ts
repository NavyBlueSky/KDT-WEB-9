// interface
interface Student {
    name: string;
    grade: number;
    isPassed: boolean;
}

let persons: Student = {
    name: 'lyle',
    grade: 4,
    isPassed: true,
};

/*-------------------*/
// type
type Gender = 'Female' | 'Male' | 'Boy' | 'Girl';
const gender: Gender = 'Boy';
