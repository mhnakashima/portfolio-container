import React from 'react';
import InfoApp from './components/InfoApp';

const App = () => {

    return (
        <>
            {/* Microfront with Main Info */}
            <InfoApp />
            <main className="menu">
                {/* Micro with status, menu and Language Selection*/}
                <div className="app-menu">

                </div>

                {/* Navigation Sections using microfront*/}

                {/* App Experience */}
                <section id="app-experience" className="app">

                </section>

                {/* App Portfolio */}
                <section id="app-portfolio" className="app">

                </section>

                {/* App Contact me */}
                <section id="app-contact" className="app">

                </section>

                {/* App FAQ */}
                <section id="app-faq" className="FAQ">

                </section>
            </main>
        </>
    )
}

export default App;