import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import { EventProvider} from "./event/EventProvider.js"
import { EventList} from "./event/EventList.js"
import { GameForm } from "./game/GameForm.js"
import {EventForm} from "./event/EventForm.js"


// sync a repository
export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            {/* Application views */}
            <GameProvider>
                <Route exact path="/">
                    <GameList />
                </Route>
                <Route exact path="/games/new">
                    <GameForm />
                </Route>
            </GameProvider>

            <EventProvider>
                <GameProvider>
                    <Route exact path="/events">
                        <EventList />
                    </Route>
                    <Route path="/events/new">
                        <EventForm />
                    </Route>
                </GameProvider>
            </EventProvider>

         
        </main>
    </>
}
