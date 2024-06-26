import React, {FunctionComponent, JSX} from 'react';
import styles from './MainPageLayout.module.css'
import {MainPageLayoutProps} from "@/layouts/MainLayout/MainPageLayout.props";
import Header from "@/templates/Header/Header";
import Footer from "@/templates/Footer/Footer";

const MainPageLayout = ({children}: MainPageLayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withMainPageLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withMainLayoutComponent(props: T): JSX.Element{
        return (
            <MainPageLayout>
                <Component {...props}/>
            </MainPageLayout>
        )
    }
}
