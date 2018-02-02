import createHistory from "history/createBrowserHistory";
import * as React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import {Provider} from "react-redux";
import {Route} from "react-router";
import {ConnectedRouter, routerMiddleware} from "react-router-redux";
import {RootState} from "./reducers";
import {configureStore} from "./store/configureStore";

import {AppLayout} from "./containers/AppLayout";
import {SCEPPage} from "./containers/config/SCEPPage";

import {CertificatesPage} from "./containers/CertificatesPage";
import {OrganizationPage} from "./containers/config/OrganizationPage";
import {VPPPage} from "./containers/config/VPPPage";
import {DeviceGroupPage} from "./containers/DeviceGroupPage";
import {DeviceGroupsPage} from "./containers/DeviceGroupsPage";
import {DevicePage} from "./containers/DevicePage";
import {DevicesPage} from "./containers/DevicesPage";
import {ProfilePage} from "./containers/ProfilePage";
import {ProfilesPage} from "./containers/ProfilesPage";
import {SettingsPage} from "./containers/SettingsPage";

import "../sass/app.scss";
import {ApplicationPage} from "./containers/ApplicationPage";
import {ApplicationsPage} from "./containers/ApplicationsPage";

const initialState: RootState = {};

const history = createHistory();
const store = configureStore(initialState, routerMiddleware(history));

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer>
                <AppLayout>
                    <Route exact path="/applications" component={ApplicationsPage} />
                    <Route path="/applications/add/:platform" component={ApplicationPage} />
                    <Route path="/certificates" component={CertificatesPage} />
                    <Route exact path="/devices" component={DevicesPage} />
                    <Route path="/devices/:id" component={DevicePage} />

                    <Route exact path="/device_groups" component={DeviceGroupsPage} />
                    <Route path="/device_groups/add" component={DeviceGroupPage} />
                    <Route path="/device_groups/:id" component={DeviceGroupPage} />

                    <Route exact path="/profiles" component={ProfilesPage} />
                    <Route path="/profiles/:id" component={ProfilePage} />

                    <Route exact path="/settings" component={SettingsPage} />
                    <Route path="/settings/scep" component={SCEPPage} />
                    <Route path="/settings/organization" component={OrganizationPage} />
                    <Route path="/settings/vpp" component={VPPPage} />
                </AppLayout>
            </AppContainer>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root") as HTMLElement,
);
