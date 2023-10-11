'use client';

import { useState } from 'react';
import useSWR from 'swr';

import styles from './page.module.css';

import { fetchOnePost } from '@/libs/fetchOnePost';

interface DataInt {
    title: string;
    body: string;
}

interface Props {
    data: DataInt;
}

const ComponentOne: React.FC <Props> = ({ data }) => {
    return data ? (
        <div className={styles.card}>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <span>ComponentOne</span>
        </div>
    ) : (
        <div>...Loading ComponentOne</div>
    );
};

const ComponentTwo: React.FC <Props> = ({ data }) => {
    return data ? (
        <div className={styles.card}>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <span>ComponentTwo</span>
        </div>
    ) : (
        <div>...Loading ComponentTwo</div>
    );
};

export default function Home() {
    const [showComponentTwo, setShowComponentTwo] = useState(false);
    const { data } = useSWR('custom_key_1', fetchOnePost);

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <ComponentOne 
                  data={data}
                />
                {showComponentTwo ? (
                    <ComponentTwo 
                      data={data}
                    />
                ) : (
                    <button className={styles.btn} onClick={() => setShowComponentTwo(true)}>
                        Show ComponentTwo
                    </button>
                )}
            </div>
        </main>
    );
}
