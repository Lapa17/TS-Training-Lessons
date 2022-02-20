import React from 'react'
import './lesson_4';
import { handlePromise } from './lesson_4';

const Lesson4 = () => {
    const createPromise = () => {
        let newPromise:Promise<any> = new Promise((res, rej)=>{
            handlePromise.resolve = res
            handlePromise.reject = rej
        })
        handlePromise.promise = newPromise
        console.log(handlePromise)
        handlePromise.promise
        .then(handlePromise.onSuccess)
        .catch(handlePromise.onError);
    }
    const setResolve = () => {
        handlePromise.resolve && handlePromise.resolve('Yo Yo Yo');
    }
    
    const setReject = () => {
        handlePromise.reject && handlePromise.reject('Sad story');
    }
    return (
        <div>
            <button id='btn-create-promise' onClick={createPromise}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={setResolve}>Resolve Promise</button>
            <button id='btn-reject-promise'onClick={setReject}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;