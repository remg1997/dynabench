/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import { YixinTaskPreview, YixinTaskOnboarder, YixinTaskMain } from './yixin/core.jsx';
import { DivyanshNLITaskPreview, DivyanshNLITaskOnboarder, DivyanshNLITaskMain } from './divyansh/nli-1/core.jsx';
import { DivyanshQATaskPreview, DivyanshQATaskOnboarder, DivyanshQATaskMain } from './divyansh/qa-1/core.jsx';
import { NLITaskPreview, NLITaskOnboarder, NLITaskMain } from './nli-1/core.jsx';

const TaskComponents = {
  'yixin-1': [YixinTaskPreview, YixinTaskOnboarder, YixinTaskMain],
  'divyansh-nli-1': [DivyanshNLITaskPreview, DivyanshNLITaskOnboarder, DivyanshNLITaskMain],
  'divyansh-qa-1': [DivyanshQATaskPreview, DivyanshQATaskOnboarder, DivyanshQATaskMain],
  'nli-1': [NLITaskPreview, NLITaskOnboarder, NLITaskMain]
  // TODO: New tasks are added here
};

class TaskFrontend extends React.Component {
  constructor(props) {
    super(props);
    this.api = props.api;
    if (props.taskConfig.task_name) {
      this.task = props.taskConfig.task_name;
      if (!this.task in TaskComponents) {
        throw "Unknown task ID specified"
      }
    } else {
      throw "No task ID specified";
    }
  }
  render() {
    const [ TaskPreview, TaskOnboarder, TaskMain ] = TaskComponents[this.task];
    if (this.props.isPreview) {
      return <TaskPreview {...this.props} />;
    } else if (this.props.isOnboarding) {
      return <TaskOnboarder {...this.props} />;
    } else {
      return <TaskMain {...this.props} />;
    }
  }
}

export { TaskFrontend };
