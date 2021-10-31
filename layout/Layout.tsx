import {LayoutProps} from './Layout.props';
import styles        from './Layout.module.css';
import {Sidebar}     from './Sidebar/Sidebar';
import {Header}      from './Header/Header';
import {Footer}      from './Footer/Footer';


export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
};