import React, { useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '87f295c438227cb2528db30639e444f42e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if(command === 'testCommand') {
                    alert('This code was executed');
                }
            }

        })
    },[])

    return (
        <div>
            <h1>
                Alan application web
            </h1>
        </div>
    );

    
}

export default App;