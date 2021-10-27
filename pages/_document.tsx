import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document';



export default class MyDocument extends Document {

    // метод getInitialProps возвращает initialProps из исходного документа в наш кастомный документ
    static async getInitialProps(ctx:DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}