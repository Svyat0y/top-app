import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode,
	size?: 'm' | 's'
	color?: 'ghost' | 'gray' | 'green' | 'primary' | 'red',
	href?: string
}
