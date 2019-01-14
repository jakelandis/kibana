/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { EuiButton, EuiPanel, EuiSpacer, EuiSteps, EuiText, EuiTitle } from '@elastic/eui';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Root = styled.div`
  padding: 40px 0;
  margin: 0 auto;
  &>div {
    margin-top: 24px;
    width: 784px;
  }
`

const steps = [
  {
    title: 'Configure Kibana Code Instance',
    children: (
      <EuiText>
        <p>
        If you are running a single instance of Kibana, skip this step.
        </p>
        <p></p>
        <p>
        If you are running multiple instances of Kibana, 
        you will need to add the following lines of code into your 
        kibana.yml file for all the instances except the one you want to use as your Code instance:
        </p>
        <h5>XPACK.CODE</h5>
        <pre>
          <code>
          redirectToNode: http://localhost:5601/{'{baseUrl}'}
          </code>
          <code>
          enableGlobalReference: false
          </code>
      </pre>
    </EuiText>
    ),
  },
  {
    title: 'Download and install language servers',
    children: <EuiText>
      <p>
        If you need code intelligence support for your repos, 
        you need to install the language server for the programming languages.
      </p>
      <p></p>
      <h5>PRE-INSTALLED LANGUAGE SERVERS:</h5>
      <p></p>
      Typescript
      <p></p>
      <h5>AVAILABLE LANGUAGE SERVERS:</h5>
      <p></p>
      Java
      <p></p>
      <Link to="/admin?tab=LanguageServers">Manage language server installation</Link>
      </EuiText>,
  },
  {
    title: 'Import a repository from a git address',
    children: (
      <EuiText>
        <p>
          You can add a repo to Code by simply putting in the git address of the repo. 
          Usually this is the same git address you use to run the git clone command, 
          you can find more details about the formats of git addresses that Code accepts&nbsp;
          <Link to="">here</Link>.
        </p>
      </EuiText>
    ),
  },
  {
    title: 'Verify that your repo has been successfully imported',
    children: (
      <EuiText>
        <p>Once the repo is added and indexed successfully, 
        you can verify that the repo is searchable and the code intelligence is available. 
        You can find more details of how the search and code intelligence work in 
        <Link to="">our docs</Link>.
        </p>
      </EuiText>
    ),
  },
];

export const SetupGuide = () => {
  return (
    <Root>
      <EuiButton iconType="sortLeft"><Link to="/admin">Back To Project Dashboard</Link></EuiButton>
      <EuiPanel>
        <EuiTitle>
          <h3>Getting started in Elastic Code</h3>
        </EuiTitle>
        <EuiSpacer />
        <EuiSteps steps={steps}/>
      </EuiPanel>
    </Root>
  );
};
