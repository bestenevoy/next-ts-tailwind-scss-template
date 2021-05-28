import Document, {Html, Head, Main, NextScript} from 'next/document'


export default class MyDocument extends Document {
    render () {
        return (
            <Html>
                <Head />
                <body className="font-sans text-base relative bottom-0 top-0 right-0 left-0">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}