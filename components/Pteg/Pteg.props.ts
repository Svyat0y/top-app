import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';


export interface PtegProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode;
    pSize?: 18 | 16 | 14
}