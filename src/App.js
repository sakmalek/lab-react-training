import React from 'react';
import './App.css';
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Ratin"
import DriverCard from "./components/DriverCard";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";

import maxence from './assets/images/maxence.png';
import maxenceHasSunglasses from './assets/images/maxence-glasses.png';

function App() {
    return (
        <div className="App">
            <h1 className="iteration-h1">IdCard</h1>
            <IdCard
                lastName='Doe'
                firstName='John'
                gender='male'
                height={178}
                birth={new Date("1992-07-14")}
                picture="https://randomuser.me/api/portraits/men/44.jpg"
            />

            <IdCard
                lastName='Delores '
                firstName='Obrien'
                gender='female'
                height={172}
                birth={new Date("1988-05-11")}
                picture="https://randomuser.me/api/portraits/women/44.jpg"
            />

            <h1 className="iteration-h1">Greetings</h1>

            <Greetings lang="de">Ludwig</Greetings>
            <Greetings lang="fr">François</Greetings>

            <h1 className="iteration-h1">Random</h1>

            <Random min={1} max={6}/>
            <Random min={1} max={100}/>

            <h1 className="iteration-h1">BoxColor</h1>

            <BoxColor r={255} g={0} b={0}/>
            <BoxColor r={128} g={255} b={0}/>

            <h1 className="iteration-h1">CreditCards</h1>
            <CreditCard
                type="Visa"
                number="0123456789018845"
                expirationMonth={3}
                expirationYear={2021}
                bank="BNP"
                owner="Maxence Bouret"
                bgColor="#11aa99"
                color="white"/>
            <CreditCard
                type="Master Card"
                number="0123456789010995"
                expirationMonth={3}
                expirationYear={2021}
                bank="N26"
                owner="Maxence Bouret"
                bgColor="#eeeeee"
                color="#222222"/>
            <CreditCard
                type="Visa"
                number="0123456789016984"
                expirationMonth={12}
                expirationYear={2019}
                bank="Name of the Bank"
                owner="Firstname Lastname"
                bgColor="#ddbb55"
                color="white"/>

            <h1 className="iteration-h1">Ratings</h1>

            <Rating children='0'/>
            <Rating children='1.49'/>
            <Rating children='1.5'/>
            <Rating children='3'/>
            <Rating children='4'/>
            <Rating children='5'/>

            <h1 className="iteration-h1">DriverCards</h1>
            <DriverCard
                name="Travis Kalanick"
                rating={4.2}
                img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
                car={{
                    model: "Toyota Corolla Altis",
                    licensePlate: "CO42DE"
                }}/>
            <DriverCard
                name="Dara Khosrowshahi"
                rating={4.9}
                img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
                car={{
                    model: "Audi A3",
                    licensePlate: "BE33ER"
                }}/>

            <h1 className="iteration-h1">Like Button</h1>
            <LikeButton/> <LikeButton/>

            <h1 className="iteration-h1">ClickablePicture</h1>

            <ClickablePicture
                img={maxence}
                imgClicked={maxenceHasSunglasses}
            />
            <h1 className="iteration-h1">Dice</h1>
            <Dice/>
            <Dice/>
            <Dice/>

            <h1 className="iteration-h1">Carousel</h1>

            <Carousel
                imgs={[
                    'https://randomuser.me/api/portraits/women/1.jpg',
                    'https://randomuser.me/api/portraits/men/1.jpg',
                    'https://randomuser.me/api/portraits/women/2.jpg',
                    'https://randomuser.me/api/portraits/men/2.jpg'
                ]}
            />
        </div>

    );
}

export default App;
