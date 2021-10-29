import {Htag, Button, Pteg} from '../components';


export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag='h1'>Заголовок</Htag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <Pteg>параграф</Pteg>
        </div>
    );
}