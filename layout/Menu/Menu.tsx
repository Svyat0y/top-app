import { useContext }         from 'react';
import { AppContext }         from '../../context/app.context';
import { FirstLevelMenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory }   from '../../interfaces/page.interface';
import CoursesIcon            from './icons/courses.svg';
import ServicesIcon           from './icons/services.svg';
import BooksIcon              from './icons/books.svg';
import ProductsIcon           from './icons/products.svg';


const FirstLevelMenuItem: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services },
	{ route: 'courses', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books },
	{ route: 'courses', name: 'Товары', icon: <ProductsIcon/>, id: TopLevelCategory.Products }
];

export const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext( AppContext );

	return (
		<div>
			<ul>
				{ menu.map( ( m ) =>
					<li key={ m._id.secondCategory }>{ m._id.secondCategory }</li>
				) }
			</ul>
		</div>
	);
};