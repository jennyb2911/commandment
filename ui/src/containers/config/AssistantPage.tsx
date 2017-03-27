import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {RouteComponentProps} from 'react-router';
import {Assistant} from '../../components/Assistant';
import {nextStep, prevStep} from '../../actions/assistant';
import {newCertificateSigningRequest} from '../../actions/signing_requests';
import {NextStepAction, PrevStepAction} from "../../actions/assistant";
import {APNSConfiguration} from '../../components/assistant/APNSConfiguration';
import {SSLConfiguration} from "../../components/assistant/SSLConfiguration";
import {SCEPConfiguration} from "../../components/assistant/SCEPConfiguration";
import {FinalStep} from "../../components/assistant/FinalStep";

interface AssistantPageState {

}

interface AssistantPageDispatchProps {
    nextStep: () => NextStepAction;
    prevStep: () => PrevStepAction;
    newCertificateSigningRequest: (purpose: string) => void;
}

interface AssistantPageProps extends AssistantPageDispatchProps {

}

@connect(
    state => state.assistant,
    (dispatch: Dispatch<any>) => {
        return bindActionCreators({
            nextStep,
            prevStep,
            newCertificateSigningRequest
        }, dispatch);
    }
)
export class AssistantPage extends React.Component<AssistantPageProps & RouteComponentProps<any>, AssistantPageState> {


    handleGenerateSSLCSR = () => {
        console.log('generating an SSL CSR');
        this.props.newCertificateSigningRequest('ssl');
    };

    render() {
        const {
            children,
            currentStep,
            totalSteps,
            nextStep,
            prevStep
        } = this.props;

        const steps = [
            <APNSConfiguration />,
            <SSLConfiguration onClickGenerateCSR={this.handleGenerateSSLCSR} />,
            <SCEPConfiguration />,
            <FinalStep />
        ];

        return (
            <div className='AssistantPage container top-margin'>
                <Assistant
                    currentStep={currentStep}
                    totalSteps={steps.length}
                    onClickNext={nextStep}
                    onClickPrev={prevStep}
                    components={steps}
                />
            </div>
        )
    }

}