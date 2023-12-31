import DigitalClockImg from "../assets/images/DC.png";
import RickAndMortyImg from "../assets/images/RaM.png";
import RandomUsersImg from "../assets/images/RUA.png";

export const projects = [
    {
        img: RickAndMortyImg,
        title: "Rick and Morty API",
        dev: "This project was made consuming a Rick And Morty API showing characteristics of each character in the series developed with React js.",
        hv: "https://s4rmi618.github.io/Rick-and-Morty-App-React/",
        hc: "https://github.com/S4RMI618/Rick-and-Morty-App-React"
    },
    {
        img: DigitalClockImg,
        title: "Custom Digital Clock",
        dev: "This project is a digital clock with two additional functions that was made to meet a goal in basic knowledge of Vanilla made with this technology.",
        hv : "https://s4rmi618.github.io/Digital_Clock/",
        hc: "https://github.com/S4RMI618/Digital_Clock"
    },
    {
        img: RandomUsersImg,
        title: "Random Users API",
        dev: "This project was done by consuming a Random Users API that displays the data for each person with a filter that takes an input as input and filters by username. This project was developed with React js.",
        hv : "https://s4rmi618.github.io/API-Random-Users/",
        hc: "https://github.com/S4RMI618/API-Random-Users"
    }
]

export default projects;