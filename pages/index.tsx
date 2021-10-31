import {Htag, Button, Ptag, Tag, Rating} from '../components';
import {useState}                        from 'react';
import {withLayout}                      from '../hoc/withLayout';


const Home = (): JSX.Element => {

    const [rating, setRating] = useState<number>(0);

    return (
        <>
            <Htag tag='h1'>Заголовок</Htag>

            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>

            <Ptag size='l'>параграф</Ptag>
            <Ptag size='s'>параграф</Ptag>
            <Ptag>параграф</Ptag>

            <Tag>Tag1</Tag>
            <Tag size='s' color='gray'>Tag2</Tag>
            <Tag color='green'>Tag3</Tag>
            <Tag color='primary'>Tag4</Tag>
            <Tag href='https://google.com.ua' color='red'>Tag5</Tag>

            <Rating rating={rating} isEditable={true} setRating={setRating}/>
        </>
    );
};

export default withLayout(Home);