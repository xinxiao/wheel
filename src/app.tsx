import {
    preloadAuth,
    preloadFirestore,
    useFirebaseApp
} from 'reactfire';

import Home from './home';

const preloadSDKs = (firebaseApp: any) => {
    return Promise.all([
        preloadAuth({ firebaseApp }),
        preloadFirestore({
            firebaseApp,
            setup(firestore) {
                return firestore().enablePersistence();
            }
        })
    ]);
};

const App = () => {
    const firebaseApp = useFirebaseApp();
    preloadSDKs(firebaseApp);

    return <Home />;
}

export default App;