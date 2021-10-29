import styles      from './Pteg.module.css';
import {PtegProps} from './Pteg.props';
import cn          from 'classnames';


export const Pteg = ({children, pSize = 16, className, ...props}: PtegProps): JSX.Element => {
    return (
        <p className={cn(styles.p, className, {
            [styles.p18]: pSize == 18,
            [styles.p16]: pSize == 16,
            [styles.p14]: pSize == 14
        })} {...props}
        >
            {children}
        </p>
    );
};