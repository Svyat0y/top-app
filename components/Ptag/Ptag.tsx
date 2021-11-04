import { PtagProps } from './Ptag.props';
import styles        from './Ptag.module.css';
import cn            from 'classnames';


export const Ptag = ( { children, size = 'm', className, ...props }: PtagProps ): JSX.Element => {
	return (
		<p className={ cn( styles.p, className, {
			[ styles.l ]: size == 'l',
			[ styles.m ]: size == 'm',
			[ styles.s ]: size == 's'
		} ) } { ...props }
		>
			{ children }
		</p>
	);
};