import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from '../../../common/components/Heading';
import EmailSignupArea, { ContentWrapper } from './emailSignup.style';
import ConvertKitForm from 'convertkit-react'

const EmailSignup = () => {

  return (
    <EmailSignupArea id="trail">
      <ContentWrapper>
        <Fade up delay={100}>
          <Heading content={'Learn When We Launch'} />
        </Fade>
        <Fade up delay={200}>
          <ConvertKitForm formId={1532784} namePlaceholder={'Your name'}/>
        </Fade>
      </ContentWrapper>
    </EmailSignupArea>
  );
};

export default EmailSignup;
