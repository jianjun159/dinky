/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

export default {
  /**
   *
   * about
   *
   * */

  'about.Community': 'Welcome to join the Dinky Official Community, Build a win-win situation',
  'about.QQcode': 'QQ Official Community Group',
  'about.communityRules': 'Community Rules',
  'about.communityRules.1':
    'It is forbidden to publish or discuss content that is irrelevant or inappropriate to the subject of this group, once found it will be kicked immediately. ',
  'about.communityRules.2':
    'For bug feedback and feature improvements or suggestions, please use issue, please read the issue document requirements. ',
  'about.communityRules.3':
    'Please read the Readme, official account articles, official website documents, and Bilibili videos carefully before deployment and use. ',
  'about.communityRules.4':
    'Please be polite and explain [version, execution mode, operation description, screenshot] when asking questions in the group. ',
  'about.communityRules.5':
    ' Register who is using Dinky, and can enter the enterprise user group to provide technical support. ',
  'about.dingTalkCode': 'DingTalk Official Community Group',
  'about.precautions': 'Precautions',
  'about.usingHelp': 'Using Help',
  'about.wechatApply': 'WeChat user community group',
  'about.wechatCode': 'Wechat Official Account',
  /**
   *
   * button
   *
   * */

  'button.push': 'Push',
  /**
   *
   * catalog
   *
   * */

  'catalog.name': 'Job Name',
  'catalog.useTemplate': 'Use Template',
  'catalog.name.placeholder': 'Please enter the job name',
  'catalog.name.validate.error': 'Job name cannot contain _ characters, K8s naming specification',
  'catalog.name.tip':
    'This name can be used as the JobName of the FlinkSql task (pipeline.name configuration item)',
  'catalog.note': 'Job Description',
  'catalog.note.placeholder': 'Please enter the job description',
  'catalog.type': 'Job Type',
  'catalog.type.placeholder': 'Please select the job type',
  'catalog.type.tip':
    'The job type determines the execution method of the job, please choose carefully, once selected, it cannot be modified',
  'catalog.udf.className': 'Class/Method Name',
  'catalog.udf.className.placeholder': 'Please enter the class or method name',
  'catalog.udf.templateId': 'UDF Template',
  'catalog.udf.templateId.placeholder': 'Please select UDF template',
  'catalog.firstLevelOwner': 'Owner',
  'catalog.firstLevelOwner.tip1': 'Please select the person responsible for the task',
  'catalog.firstLevelOwner.tip2':
    'Select the person responsible for the task and have direct responsibility for the task',
  'catalog.secondLevelOwners': 'maintainer',
  'catalog.secondLevelOwners.tip1': 'Please select the task maintainer',
  'catalog.secondLevelOwners.tip2':
    'Choose a task maintainer who is indirectly responsible for the task',
  /**
   *
   * datastudio
   *
   * */

  'datastudio.middle.terminal.mode': 'Connect Mode',
  'datastudio.middle.terminal.websocket': 'dinky backend',
  'datastudio.middle.terminal.websocket.tip':
    'In general, no modifications are required. If you have custom Nginx configurations, please edit this address.',
  'datastudio.middle.terminal.cluster': 'Flink Cluster',
  'datastudio.middle.terminal.cluster.tip':
    'It is necessary to pre-register the corresponding cluster in the registry. Only manually registered clusters will be displayed.',
  'datastudio.middle.terminal.fontSize': 'Font Size',
  'datastudio.middle.terminal.backspaceAsCtrlH': 'Backspace As CtrlH',
  'datastudio.middle.terminal.backspaceAsCtrlH.tip':
    'If issues with display arise following a rollback deletion, modify this ',
  'datastudio.middle.terminal.connect': 'Connect',

  'datastudio.middle.qg': 'Quick Guide',
  'datastudio.middle.qg.alertGroup': 'Register Alert Group',
  'datastudio.middle.qg.alertInstance': 'Register Alert Instance',
  'datastudio.middle.qg.clusterConfiguration': 'Register Cluster Configuration',
  'datastudio.middle.qg.clusterInstance': 'Register Session Cluster',
  'datastudio.middle.qg.database': 'Register DataSource',
  'datastudio.middle.qg.document': 'Document',
  'datastudio.middle.qg.fragment': 'Global Variables',
  'datastudio.middle.qg.gitprojects': 'Git Projects',
  'datastudio.middle.qg.resource': 'Resource',
  'datastudio.middle.qg.alertRule': 'Alert Rule',
  'datastudio.middle.qg.alertTemplate': 'Register Alert Template',
  'datastudio.middle.qg.accountCenter': 'Account Center',
  'datastudio.middle.qg.globalsetting': 'Global Settings',
  'datastudio.middle.qg.rootLog': 'View Root Log',
  'datastudio.middle.qg.udf': 'UDF',
  'datastudio.header.pushdolphin.title': 'Push task [ {name} ] to DolphinScheduler',
  'datastudio.header.pushdolphin.taskId': 'Dinky task encoding',
  'datastudio.header.pushdolphin.taskGroup': 'Task Group',
  'datastudio.header.pushdolphin.taskGroupPriority': 'Task Group Priority',
  'datastudio.header.pushdolphin.taskName': 'Task name: {name}',
  'datastudio.header.pushdolphin.taskNameExt':
    'Task type: {type} Process definition: {processDefinitionName}',
  'datastudio.header.pushdolphin.upstreamCodes': 'pre-task',
  'datastudio.header.pushdolphin.upstreamCodesTip':
    'After selecting the pre-task, the task will not be executed until the pre-task is successfully executed. Please choose wisely to avoid task circular dependencies. This platform does not do dependency checking',
  'datastudio.header.pushdolphin.taskPriority': 'Task Priority',
  'datastudio.header.pushdolphin.failRetryTimes': 'Number of retries',
  'datastudio.header.pushdolphin.failRetryInterval': 'Failure retry interval (minutes)',
  'datastudio.header.pushdolphin.failRetryIntervalPlaceholder':
    'Please enter the failure retry interval (minutes)',
  'datastudio.header.pushdolphin.delayTime': 'Delayed execution time (minutes)',
  'datastudio.header.pushdolphin.delayTimePlaceholder':
    'Please enter the delay execution time (minutes)',
  'datastudio.header.pushdolphin.timeoutFlag': 'Timeout alarm',
  'datastudio.header.pushdolphin.timeoutFlag.warn': 'Timeout warning',
  'datastudio.header.pushdolphin.timeoutFlag.failed': 'Timeout failed',
  'datastudio.header.pushdolphin.timeoutFlagTip': 'Please select a timeout warning',
  'datastudio.header.pushdolphin.flag': 'Run flag',
  'datastudio.header.pushdolphin.flagTip': 'Please select the run flag',
  'datastudio.header.pushdolphin.isCache': 'Cache run',
  'datastudio.header.pushdolphin.isCacheTip': 'Please select cache run',
  'datastudio.header.pushdolphin.timeoutNotifyStrategy': 'Timeout notification strategy',
  'datastudio.header.pushdolphin.timeoutNotifyStrategyTip':
    'Please select a timeout notification strategy',
  'datastudio.header.pushdolphin.timeout': 'Timeout (minutes)',
  'datastudio.header.pushdolphin.timeoutPlaceholder': 'Please enter the timeout time (minutes)',
  'datastudio.project.create.folder.name': 'Folder Name',
  'datastudio.project.create.folder.name.placeholder': 'Please enter the folder name',
  'datastudio.project.create.folder.tip':
    'No job, please click the new directory in the upper left corner',
  'datastudio.project.delete.job': 'Delete [{type}] Job [{name}]',
  'datastudio.project.delete.job.confirm':
    'This operation will delete the execution history of the task and all information of the task. \nPlease operate with caution! This operation is irreversible!!!  \n\t\t\t\tConfirm to delete?',
  'datastudio.project.import.title': 'Import json file',
  'datastudio.project.import.tip': 'Click or drag file to this area to upload',
  /**
   *
   * devops
   *
   * */
  'devops.joblist.status.all': 'All',
  'devops.joblist.status.running': 'Running',
  'devops.joblist.status.cancelled': 'Canceled',
  'devops.joblist.status.failed': 'Exception',
  'devops.joblist.status.restarting': 'Restarting',
  'devops.joblist.status.finished': 'Completed',
  'devops.joblist.status.unknown': 'Unknown',

  'devops.baseinfo.name': 'Job Name',
  'devops.baseinfo.parallelism': 'Parallelism',
  'devops.baseinfo.readbytes': 'Receive Bytes',
  'devops.baseinfo.readrecords': 'Receive Records',
  'devops.baseinfo.status': 'Status',
  'devops.baseinfo.tasks': 'Operator',
  'devops.baseinfo.writebytes': 'Send Bytes',
  'devops.baseinfo.writerecords': 'Send Records',
  'devops.baseinfo.backpressure': 'BackPressure',
  'devops.baseinfo.busy': 'Busy',
  'devops.baseinfo.idle': 'Idle',
  'devops.jobinfo.ck.checkpoint_type': 'Type',
  'devops.jobinfo.ck.duration': 'Duration',
  'devops.jobinfo.ck.external_path': 'Storage Location',
  'devops.jobinfo.ck.id': 'ID',
  'devops.jobinfo.ck.latest_ack_timestamp': 'Last Response Time',
  'devops.jobinfo.ck.name': 'Name',
  'devops.jobinfo.ck.recovery': 'Recovering from Checkpoint! ',
  'devops.jobinfo.ck.recovery.failed': 'Recovery job failed',
  'devops.jobinfo.ck.recovery.recoveryTo': 'Recovery Here',
  'devops.jobinfo.ck.recovery.success': 'Recovery job succeeded',
  'devops.jobinfo.ck.recoveryConfirm': 'Are you sure to Recover from Checkpoint [{path}]?',
  'devops.jobinfo.ck.state_size': 'State Size',
  'devops.jobinfo.ck.status': 'Status',
  'devops.jobinfo.ck.taskid': 'Task ID',
  'devops.jobinfo.ck.trigger_timestamp': 'Trigger Time',
  'devops.jobinfo.config.ClusterInstanceName': 'Flink Instance',
  'devops.jobinfo.config.JobAlert': 'Alert History',
  'devops.jobinfo.config.JobAlert.history.group': 'Alert Group',
  'devops.jobinfo.config.JobAlert.history.title': 'Alert Title',
  'devops.jobinfo.config.JobAlert.history.content': 'Alert Content',
  'devops.jobinfo.config.JobAlert.history.status': 'Alert Send Status',
  'devops.jobinfo.config.JobAlert.history.log': 'Alert Log',
  'devops.jobinfo.config.JobAlert.history.time': 'Alert Time',
  'devops.jobinfo.config.JobAlert.history.delete':
    'Are you sure to delete the alert history record?',
  'devops.jobinfo.config.JobBaseInfo': 'Job Base Info',
  'devops.jobinfo.config.JobCheckpoints': 'Checkpoints Info',
  'devops.jobinfo.config.JobId': 'Flink Job ID',
  'devops.jobinfo.config.JobInfo': 'Job Info',
  'devops.jobinfo.config.JobLineage': 'Lineage',
  'devops.jobinfo.config.JobLogs': 'Job Logs',
  'devops.jobinfo.config.JobMonitor': 'Monitor',
  'devops.jobinfo.config.JobParallelism': 'Job Parallelism',
  'devops.jobinfo.config.JobType': 'Job Type',
  'devops.jobinfo.config.JobVersion': 'History Info',
  'devops.jobinfo.config.RestartStrategy': 'Restart Strategy',
  'devops.jobinfo.config.UserCustomConf': 'Custom Config',
  'devops.jobinfo.config.execmode': 'Exec Mode',
  'devops.jobinfo.config.savePointPath': 'Savepoint Path',
  'devops.jobinfo.config.startFromSavePoint': 'Start from Savepoint',
  'devops.jobinfo.config.submitType': 'Submit Mode',
  'devops.jobinfo.config.taskId': 'Dinky Job ID',
  'devops.jobinfo.config.useSqlFragment': 'Sql Fragment',
  'devops.jobinfo.job.key': '{key} Job',
  'devops.jobinfo.job.key.success': '{key} Success',
  'devops.jobinfo.job.keyConfirm': '{key} this Job？',
  'devops.jobinfo.metrics.configMetrics': 'Metrics Config',
  'devops.jobinfo.metrics.metricsItems': 'Metrics Items',
  'devops.jobinfo.metrics.selected': 'Selected',
  'devops.jobinfo.offline': 'Offline',
  'devops.jobinfo.recently.job.status': 'View recently saved job status information',
  'devops.jobinfo.reonline': 'Re-Online',
  'devops.jobinfo.restart': 'Restart',
  'devops.jobinfo.restart.auto.savepoint': 'Automatically create a save point and restart',
  'devops.jobinfo.restart.from.savepoint': 'Restart from the save point',
  'devops.jobinfo.restart.from.savepoint.help':
    'Stop the job and start from the specified save point, this option will not automatically create a save point (be sure to ensure that this path exists, otherwise the restart will fail)',
  'devops.jobinfo.restart.cannot.auto.savepoint':
    'The job has been stopped and Smart Restart is not available',
  'devops.jobinfo.savepoint.cancel': 'Savepoint Stop',
  'devops.jobinfo.savepoint.canceljob': 'Normal Stop',
  'devops.jobinfo.savepoint.stop': 'Savepoint Pause',
  'devops.jobinfo.savepoint.trigger': 'Savepoint Triggers',
  'devops.jobinfo.smart_stop': 'Smart Stop',
  'devops.jobinfo.smart_restart': 'Smart restart',
  'devops.jobinfo.smart_restart.help':
    'A save point is automatically created and started from a job stop during the job stop process',
  'devops.jobinfo.unable.obtain.status':
    'Unable to connect to Flink cluster to obtain the latest job status information',
  'devops.jobinfo.version.delete': 'Delete Version',
  'devops.jobinfo.version.delete.sure': 'Are you sure you want to remove this version？V{version}',
  'devops.jobinfo.version.latestVersion': 'Current Version',
  'devops.jobinfo.version.rollBack': 'Roll back this version',
  'devops.jobinfo.version.versionList': 'Job Version',
  'devops.jobinfo.remap.title': 'Remap the cluster information',
  'devops.jobinfo.remap.cluster.title': 'Cluster instance mapping information',
  'devops.jobinfo.remap.cluster.title.help':
    '(Note: This operation will modify the configuration of the cluster instance simultaneously.)',
  'devops.jobinfo.remap.job.title': 'Job mapping information',
  'devops.joblist.clear.filter': 'Cancel Selected',
  'devops.joblist.clear.filtertips': 'Clear selected tasks, but not clear other filter conditions',
  'devops.joblist.detail': 'Job Detail',
  'devops.joblist.history': 'History',
  'devops.joblist.joblist': 'Job List',
  /**
   *
   * home
   *
   * */

  'home.fast.link': 'Quick Start / Easy Navigation',
  'home.mywork': 'My Task',
  'home.allwork': 'All Task',
  'home.task.not.desc': 'No mission statement at this time',
  'home.task.not.instance':
    'This task has not been run before, so we cannot go to the [Devops] to view task details. Please run this task first',
  'home.task.update.at': 'Updated At: {time}',
  'home.job.stream': 'Stream Job',
  'home.job.batch': 'Batch Job',
  'home.header.tips.morning.1': 'Good morning, {user}, A new day, new code, new challenges',
  'home.header.tips.morning.2':
    'good morning, {user}, The morning sunshine brings a new beginning, come on!',
  'home.header.tips.morning.3':
    'Good morning, {user}, programmer! May your bugs dissipate like morning mist.',
  'home.header.tips.morning.4':
    'Good morning, {user}, a new day, new ideas, looking forward to your burst of inspiration.',
  'home.header.tips.morning.5':
    'Good morning, {user}, The morning coffee is ready and it`s time to start working.',
  'home.header.tips.morning.6':
    'Good morning, {user}, may your morning be like a cup of hot tea, warm and comfortable.',
  'home.header.tips.morning.7':
    'Good morning, {user}, remember to smile, it will make your day even better.',
  'home.header.tips.morning.8':
    'Good morning, {user}, stay positive, something wonderful is about to happen.',
  'home.header.tips.morning.9':
    'Good morning, {user}, May your programming journey be filled with discovery and innovation.',
  'home.header.tips.morning.10': 'Good morning, {user}, may your code be as fresh as morning dew.',
  'home.header.tips.forenoon.1':
    'Good morning, {user}, may your code be as bright as the morning sun.',
  'home.header.tips.forenoon.2':
    'Good morning, {user}, are you tired from coding this morning? Take a break and continue to work hard.',
  'home.header.tips.forenoon.3':
    'Good morning, {user}, the sunshine this morning is just right, illuminating your workbench.',
  'home.header.tips.forenoon.4':
    'Good morning, {user}, enjoy your morning work. Every task is worth giving your all.',
  'home.header.tips.forenoon.5':
    'Good morning, {user}, May your code be as refreshing as morning coffee.',
  'home.header.tips.forenoon.6':
    'Good morning, {user}, may your code be as vast as the morning sky.',
  'home.header.tips.noon.1':
    'Good afternoon, {user}, Lunch time, give yourself a chance to rest and recharge.',
  'home.header.tips.noon.2':
    'Good afternoon, {user}, The sunshine at noon reminds us that it`s time to slow down and enjoy a moment of tranquility.',
  'home.header.tips.noon.3':
    'Good afternoon, {user}, A brief break at noon can make your afternoon more energetic',
  'home.header.tips.noon.4':
    'Good afternoon, {user}, The sunshine at noon is a warm embrace throughout the day.',
  'home.header.tips.noon.5':
    'Good afternoon, {user}, A sumptuous lunch is the best reward for your hard work.',
  'home.header.tips.afternoon.1':
    'Good afternoon, {user}, The afternoon work has begun. Stay enthusiastic and focused.',
  'home.header.tips.afternoon.2':
    'Good afternoon, {user}, The gentle sunshine in the afternoon is suitable for thinking or meditation, to find inner peace.',
  'home.header.tips.afternoon.3':
    'Good afternoon, {user}, The gentle breeze of the afternoon brings fresh air. May your mood be so fresh as well.',
  'home.header.tips.afternoon.4':
    'Good afternoon, {user}, don`t forget to give yourself some sweet treats during this busy afternoon! (✿✪‿✪｡)',
  'home.header.tips.afternoon.5':
    'Good afternoon, {user}, the gentle breeze of the afternoon, may your mood be as relaxed as it is. (✧∀✧)',
  'home.header.tips.evening.1':
    'Good evening, {user}, the busy day is over, let`s relax and unwind! (✿✪‿✪｡)',
  'home.header.tips.evening.2':
    'Good evening, {user}, the evening glow. May your mood be as brilliant as it is. (✧∇✧)',
  'home.header.tips.evening.3':
    'Good evening, {user}, enjoy the tranquility of the evening and let the busyness of the day slowly settle. (✧◡◡✧)',
  'home.header.tips.evening.4':
    'Good evening, {user}, In the evening sky, stars are starting to twinkle. May your dreams also light up with them. (✧✧✧)',
  'home.header.tips.evening.5':
    'Good evening, {user}, may your code shine like the stars in the evening.',
  'home.header.tips.lateNight.1':
    'Good night, {user}, The tranquility of late night, may you have a peaceful and beautiful night. (✿ ✉ ✿)',
  'home.header.tips.lateNight.2':
    'Good night, {user}, The starry sky at night brings infinite inspiration to your thinking.',
  'home.header.tips.lateNight.3':
    'Good night, {user}, The starry sky at night reminds us of the vastness of the universe and the possibilities of thinking.',
  'home.header.tips.lateNight.4':
    'Good night, {user}, late night work. May your focus and persistence bring results.',
  'home.header.tips.lateNight.5':
    'Good night, {user}, May your code be as profound as the thoughts of late night.',

  /**
   *
   * layouts
   *
   * */

  'layouts.userLayout.title': 'Dinky Real-time Platform ',
  /**
   *
   * login
   *
   * */

  'login.chooseTenant': 'Please Choose Tenant',
  'login.chooseTenantFailed': 'Tenant selection failed, please check. . . ',
  'login.chooseTenantSuccess': '{msg}, Use [ {tenantCode} ] to enter the system, loading. . .',
  'login.ldapLogin': 'LDAP Login',
  'login.notbindtenant': 'You have not bound a tenant, please contact the administrator',
  'login.password.placeholder': 'Password',
  'login.password.required': 'Please input your password!',
  'login.rememberMe': 'Remember me',
  'login.result': '{msg}\t\t{time}',
  'login.username.placeholder': 'Username',
  'login.username.required': 'Please input your username!',
  'login.token.error':
    'Unable to get token information/session has expired, will jump to the login page, please re-login...',
  /**
   *
   * menu
   *
   * */

  'menu.component': 'Component',
  'menu.componentPlaceholder': 'Please enter the component',
  'menu.edit': 'Edit Menu',
  'menu.icon': 'Icon',
  'menu.icon.reference': 'Icon reference',
  'menu.iconPlaceholder': 'Please enter an icon',
  'menu.management': 'Menu Management',
  'menu.name': 'Menu name',
  'menu.namePlaceholder': 'Please enter the Menu name',
  'menu.orderNum': 'Sort',
  'menu.parentId': 'Parent Menu',
  'menu.parentIdPlaceholder': 'Please select the parent menu',
  'menu.path': 'Path',
  'menu.pathPlaceholder': 'Please enter the path',
  'menu.perms': 'Permission ID',
  'menu.permsPlaceholder': 'Please enter the permission ID',
  'menu.tips.1': 'Modify Menu',
  'menu.tips.2': 'Add Root Menu',
  'menu.tips.3': 'Add/Delete SubMenu',
  'menu.type': 'Menu Type',
  'menu.type.button': 'Button/Area Block',
  'menu.type.dir': 'Directory',
  'menu.type.menu': 'Menu',
  'menu.typePlaceholder': 'Please select the menu type',
  /**
   *
   * metrics
   *
   * */

  'metrics.filter.10minutes': '10 Minutes',
  'metrics.filter.1day': 'one day',
  'metrics.filter.1hour': '1 Hours',
  'metrics.filter.1week': 'one week',
  'metrics.filter.2hours': '2 Hours',
  'metrics.filter.5hours': '5 Hours',
  'metrics.filter.5minutes': '5 Minutes',
  'metrics.filter.60seconds': '60 Seconds',
  'metrics.filter.custom': 'Custom',
  'metrics.filter.custom.range': 'DateTime Range',
  'metrics.filter.real': 'Real Time',
  'metrics.flink.job.name': 'Job Name',
  'metrics.flink.job.placeholder': 'Please select a job name',
  'metrics.flink.jobId': 'Flink Job ID',
  'metrics.flink.metrics.name': 'Metric Name',
  'metrics.flink.metrics.placeholder': 'Please select the Metric Name (multiple choices)',
  'metrics.flink.subTask': 'SubTask',
  'metrics.flink.subTask.placeholder': 'Please select a SubTask Name',
  'metrics.flink.taskId': 'Dinky Job ID',
  'metrics.dinky.not.open':
    'Dinky Server monitoring is not enabled, please go to the Setting Center -> Global Settings -> Metrics Configuration -> Dinky JVM Monitor switch to open',
  'metrics.flink.deleteConfirm':
    'Are you sure to delete the monitoring data under this task? \nAttention: This operation will synchronously affect the monitoring data of the operation and maintenance center for this task!! \nPlease operate with caution, this operation is irreversible!',

  /**
   *
   * pages
   *
   * */

  'pages.datastudio.editor.check': 'Check',
  'pages.datastudio.editor.debug': 'Search',
  'pages.datastudio.editor.exec': 'Execute',
  'pages.datastudio.editor.exec.error': 'Task [{jobName}] execution failed',
  'pages.datastudio.editor.debug.error': 'Task [{jobName}] debug failed',
  'pages.datastudio.editor.exec.success': 'Submit succeeded',
  'pages.datastudio.editor.debug.success': 'Search succeeded',
  'pages.datastudio.editor.execute.warn':
    'The execution mode of this task is [{type}], which does not support SQL query, please save it manually and use the button on the right - job submission',
  'pages.datastudio.editor.explan': 'Get the current FlinkSql execution graph',
  'pages.datastudio.editor.explan.tip': 'JobPlan for FlinkSQL',
  'pages.datastudio.editor.stop': 'Stop',
  'pages.datastudio.editor.stop.job': 'Stop job',
  'pages.datastudio.editor.stop.jobConfirm': 'Are you sure to stop the job [{jobName}]? ',
  'pages.datastudio.editor.stop.force.jobConfirm':
    'The current job [{job name}] fails to connect to the cluster to obtain information and cannot be stopped. Change the status forced?',
  'pages.datastudio.editor.submitting': 'The new task [{jobName}] is executing',
  'pages.datastudio.editor.checking': 'The task [{jobName}] is checking',
  'pages.datastudio.editor.debugging': 'The new task [{jobName}] is debugging',
  'pages.datastudio.editor.onlyread':
    'Task has been published, modification is prohibited, please go offline first',
  'pages.datastudio.editor.onlyread.lock':
    'No permission for task operation. Please contact the task owner',
  'pages.datastudio.editor.notsave': 'Current changes are not saved! ',
  'pages.datastudio.editor.notsave.note':
    'Continue will discard the changes, are you sure to continue?',
  'pages.datastudio.to.jobDetail': 'Operation',
  'pages.datastudio.explain.validate': 'Validating...',
  'pages.datastudio.explain.validate.allright': 'All Right',
  'pages.datastudio.explain.validate.error': 'There are errors, a total of {errorCount}',
  'pages.datastudio.explain.validate.grammar.error': 'Grammar Error',
  'pages.datastudio.explain.validate.grammar.right': 'Grammar Right',
  'pages.datastudio.explain.validate.logic.error': 'Logical Error',
  'pages.datastudio.explain.validate.logic.right': 'Logical Right',
  'pages.datastudio.explain.validate.msg': 'FlinkSql Syntax and logic check',
  'pages.datastudio.footer.codeEncoding': 'File Encoding',
  'pages.datastudio.footer.codePosition': 'Ln {Ln}',
  'pages.datastudio.footer.codeType': 'Code Type',
  'pages.datastudio.footer.lineSeparator': 'Line Separator',
  'pages.datastudio.footer.memDetails': 'Maximum heap size',

  'pages.datastudio.sql.sqlChanged': 'Code recovery',
  'pages.datastudio.sql.sqlChangedPrompt':
    'The code you modified is not saved, it is inconsistent with the server, we cached the last modification for you, please select the version',
  'pages.datastudio.sql.sqldiff.title': 'Code comparison',
  'pages.datastudio.sql.paramdiff.title': 'Configuration comparison',
  'pages.datastudio.sql.nochange': 'No change in job content',
  'pages.datastudio.sql.useCache': 'Use cached version',
  'pages.datastudio.sql.useServer': 'Use server version',
  'pages.datastudio.sql.cacheVersion': 'Local cache code',
  'pages.datastudio.sql.serverVersion': 'server-side code',
  'pages.datastudio.sql.configItem': 'Configuration Item',
  'pages.datastudio.sql.cacheConfigItem': 'Local cache configuration',
  'pages.datastudio.sql.serverConfigItem': 'server-side configuration',

  'pages.datastudio.help.sqlChanged': 'Sql context or configure changed',
  'pages.datastudio.help.sqlChangedPrompt':
    'the remote context is not the same as the current page , will the data be flushed?',
  'pages.datastudio.label.execConfig.autostop': 'AutoStop',
  'pages.datastudio.label.execConfig.autostop.tip':
    'Enable autostop, it will automatically stop the task after capturing the maximum number of records',
  'pages.datastudio.label.execConfig.changelog': 'Print ChangeLog',
  'pages.datastudio.label.execConfig.changelog.tip':
    'Open the print stream, it will run synchronously and return the ChangeLog containing op information, it is not enabled by default and returns the final result Table',
  'pages.datastudio.label.execConfig.selectDatabase': 'Select Database',
  'pages.datastudio.label.execConfig.selectDatabase.tip': 'Select the database to be used',
  'pages.datastudio.label.execConfig.maxrow': 'Maximum number of rows',
  'pages.datastudio.label.execConfig.maxrow.tip': 'The maximum number of rows of preview data',
  'pages.datastudio.label.jobConfig': 'Job Config',
  'pages.datastudio.label.jobConfig.addConfig': 'Add Config item',
  'pages.datastudio.label.jobConfig.addConfig.params': 'parameters',
  'pages.datastudio.label.jobConfig.addConfig.value': 'value',
  'pages.datastudio.label.udf': 'Udf Item',
  'pages.datastudio.label.udf.tip':
    'Inject UDF item, Automatically add statement `create temporary function [functionName] as [className]` at the beginning of the SQL statement',
  'pages.datastudio.label.udf.duplicate.tip':
    'The class [className] selected this time already exists and duplicate injection is not allowed. Please reselect or cancel injection (delete and change line).',
  'pages.datastudio.label.udf.injectUdf': 'Inject UDF item',
  'pages.datastudio.label.udf.name': 'function name',
  'pages.datastudio.label.udf.className': 'class name',
  'pages.datastudio.label.jobConfig.alertGroup': 'Alarm Group',
  'pages.datastudio.label.jobConfig.alertGroup.tip': 'Select alert group',
  'pages.datastudio.label.jobConfig.batchmode': 'Batch Mode',
  'pages.datastudio.label.jobConfig.batchmode.tip': 'Use batch mode',
  'pages.datastudio.label.jobConfig.cluster': 'Flink cluster',
  'pages.datastudio.label.jobConfig.cluster.tip': 'Select Flink cluster',
  'pages.datastudio.label.jobConfig.clusterConfig': 'Flink cluster Config',
  'pages.datastudio.label.jobConfig.clusterConfig.tip1':
    'Select Flink cluster Config for remote submission tasks in [{type}] mode',
  'pages.datastudio.label.jobConfig.clusterConfig.tip2':
    'If there is no data in the drop-down box, please configure/create a new cluster instance first, or check whether the cluster configuration/cluster instance is healthy and available/Is it in an enabled state',
  'pages.datastudio.label.jobConfig.execmode.tip':
    'Specify the execution mode of the Flink task, the default is Local',
  'pages.datastudio.label.jobConfig.watermark':
    'Current task has published,Config cannot modified,If you need to modify, please offline first',
  'pages.datastudio.label.jobConfig.lock':
    'The current task has no permission and cannot be modified. If you need to modify the task, contact the task owner to obtain the permission',
  'pages.datastudio.label.jobConfig.flinksql.env': 'FlinkSQL environment',
  'pages.datastudio.label.jobConfig.flinksql.env.tip1':
    'Select the FlinkSQL execution environment of the current task, and the environment statement will be executed in advance. The default is none. ',
  'pages.datastudio.label.jobConfig.fragment': 'Global variables',
  'pages.datastudio.label.jobConfig.fragment.tip':
    '[Enhanced Features] Enable FlinkSql global variables, use "',
  'pages.datastudio.label.jobConfig.other': 'Other Config',
  'pages.datastudio.label.jobConfig.other.tip':
    'Other Config items will be applied to the execution environment, such as pipeline.name',
  'pages.datastudio.label.jobConfig.udf': 'UDF injected',
  'pages.datastudio.label.jobConfig.udf.tip': 'Automatically inject UDF',
  'pages.datastudio.label.jobConfig.parallelism': 'Parallelism',
  'pages.datastudio.label.jobConfig.parallelism.tip':
    'Set the parallelism of Flink tasks, the minimum value is 1',
  'pages.datastudio.label.jobConfig.savePointStrategy': 'Savepoint strategy',
  'pages.datastudio.label.jobConfig.savePointStrategy.tip':
    'Specify the Savepoint strategy, the default is disabled',
  'pages.datastudio.label.jobConfig.savePointpath': 'Savepoint Path',
  'pages.datastudio.label.jobConfig.savePointpath.tip1': 'Restore Flink task from Savepoint path',
  'pages.datastudio.label.jobConfig.savePointpath.tip2': 'hdfs',
  'pages.datastudio.label.jobInfo.dialect': 'Dialect',
  'pages.datastudio.label.jobInfo.id': 'Job ID',
  'pages.datastudio.label.jobInfo.name': 'Job name',
  'pages.datastudio.label.jobInfo.versionId': 'Version number',
  'pages.datastudio.label.jobInfo.firstLevelOwner': 'Owner',
  'pages.datastudio.label.jobInfo.secondLevelOwners': 'Maintainer',
  'pages.datastudio.label.result.query.latest.data': 'Get the latest data',
  'pages.datastudio.label.result.query.latest.data.truncate':
    'The data is too long to be displayed in full',
  'pages.datastudio.label.version': 'Version History',
  'pages.datastudio.label.version.diff': 'Version Diff',
  'pages.datastudio.label.version.leftTitle': 'Version number',
  'pages.datastudio.label.version.rightTitle': 'Version number',
  'pages.datastudio.label.version.rollback': 'Rollback',
  'pages.datastudio.label.version.rollback.flinksql': 'Rollback Flink SQL Version',
  'pages.datastudio.label.version.rollback.flinksqlConfirm':
    'Are you sure to RollBack the Flink SQL version to [{versionId}]? ',
  'pages.datastudio.print.table.inputTableName': 'Please select table name',
  'pages.devops.jobinfo.localenv': 'Local environment',
  'pages.metadata.DataSearch': 'Data Search',
  'pages.metadata.selectDatabase': 'Select Database',
  'pages.task.savePointPath': 'Savepoint Path',

  'pages.datastudio.catalog.catalogSelect': 'Please select catalog & database',
  'pages.datastudio.catalog.tableInfo': 'Table Info',
  'pages.datastudio.catalog.fieldInformation': 'Field Information',
  'pages.datastudio.catalog.selectDatasource': 'Select Datasource',
  'pages.datastudio.catalog.openMission': 'Open Mission',

  'pages.datastudio.label.history.title': 'Job:【{name}】Execution History',
  'pages.datastudio.label.history.noData': 'Please click the job to view the job execution history',
  'pages.datastudio.label.history.execConfig': 'Execution Configuration',
  'pages.datastudio.label.history.statement': 'Execution Statement',
  'pages.datastudio.label.history.result': 'PreView Data',
  'pages.datastudio.label.history.error': 'View Error Log',
  'pages.datastudio.label.history.notSuccess':
    'The Job has not been successfully executed. It cannot be Preview data.',
  'pages.datastudio.label.history.clusterConfigId': 'Cluster Config ID',
  'pages.datastudio.label.history.clusterId': 'Cluster Instance ID',
  'pages.datastudio.label.history.taskType': 'Job Execution Mode',
  'pages.datastudio.label.history.clusterName': 'Cluster Name',
  'pages.datastudio.label.history.changelog': 'ChangeLog',
  'pages.datastudio.label.history.maxRows': 'Max Rows',
  'pages.datastudio.label.history.autoStop': 'Auto Stop',
  'pages.datastudio.label.history.jobId': 'Job ID',
  'pages.datastudio.label.history.jobName': 'Job Name',
  'pages.datastudio.label.history.fragment': 'Global Variables',
  'pages.datastudio.label.history.statementSet': 'StatementSet',
  'pages.datastudio.label.history.parallelism': 'Parallelism',
  'pages.datastudio.label.history.checkpoint': 'Checkpoint Interval',
  'pages.datastudio.label.history.savePointStrategy': 'Savepoint Strategy',
  'pages.datastudio.label.history.savePointPath': 'Savepoint Path',
  'pages.datastudio.label.history.clusterType': 'Cluster Type',
  'pages.datastudio.label.history.clusterInstance': 'Cluster Instance',
  'pages.datastudio.label.history.clusterConfig': 'Cluster Config',
  'pages.datastudio.label.history.local': 'Local (Built-in MiniCluster)',
  /**
   *
   * rc
   *
   * */

  'rc.ag.alertCount': 'Alert Instance Count: {count}',
  'rc.ag.alertInstanceIds': 'Alert instance',
  'rc.ag.chooseAlertInstanceIds': 'please choose Alert Instance',
  'rc.ag.create': 'Create Alert Group',
  'rc.ag.delete': 'Delete the Alert group ',
  'rc.ag.deleteConfirm': 'Are you sure to delete this Alert group? ',
  'rc.ag.inputName': 'please input Alert group name',
  'rc.ag.management': 'Alert Group Management ',
  'rc.ag.modify': 'Modify Alert Group',
  'rc.ag.name': 'Alert Group Name',
  'rc.ag.search': 'Search Name/Note',
  'rc.ai.accessKeyId': 'AccessKeyId',
  'rc.ai.accessKeyIdPleaseHolder': 'Please enter AccessKeyId',
  'rc.ai.sdkAppId': 'SdkAppId',
  'rc.ai.sdkAppIdPleaseHolder': 'Please enter SdkAppId',
  'rc.ai.accessKeySecret': 'AccessKeySecret',
  'rc.ai.accessKeySecretPleaseHolder': 'Please enter AccessKeySecret',
  'rc.ai.action': 'Interface method',
  'rc.ai.actionPleaseHolder': 'Please enter the interface method',
  'rc.ai.agentId': 'App ID(AgentId)',
  'rc.ai.agentIdPleaseHolder': 'Please enter AgentId',
  'rc.ai.sendUrl': 'QiWei Send Addr',
  'rc.ai.sendUrlPleaseHolder': 'Please enter the sending address or the proxy address',
  'rc.ai.sendUrlValidate': 'Please enter the correct sending address, no / is required at the end',
  'rc.ai.sendUrlTooltip':
    'You can enter the proxy address for the sending address, such as: http://127.0.0.1:8080/cgi-bin, the default is: https://qyapi.weixin.qq.com/cgi-bin ',
  'rc.ai.apikey': 'Account unique identifier',
  'rc.ai.apikeyPleaseHolder': 'Please enter the unique ID of the account',
  'rc.ai.appId': 'App ID',
  'rc.ai.appIdPleaseHolder': 'Please enter the application ID',
  'rc.ai.appKey': 'App Key',
  'rc.ai.appKeyPleaseHolder': 'Please enter App Key',
  'rc.ai.appSecret': 'App Secret',
  'rc.ai.appSecretPleaseHolder': 'Please enter App Secret',
  'rc.ai.atLeast': 'At least [{min}] required',
  'rc.ai.atMost': 'At most [{max}] required',
  'rc.ai.previousItemRequired': 'The previous item is required, so that the next item can be added',
  'rc.ai.atMobiles': 'Phone number',
  'rc.ai.atMobilesPleaseHolder': 'Please enter the phone number',
  'rc.ai.atMobilesRepeat': 'Duplicate phone number',
  'rc.ai.atMobilesFormat': 'Phone number format is incorrect',
  'rc.ai.atMobilesMax': 'Phone number (up to [{max}] digits)',
  'rc.ai.emailPleaseHolderFormat': 'Please enter the correct email address',
  'rc.ai.atUsers': '@User',
  'rc.ai.atUsersPleaseHolder': 'Please enter the @user ID',
  'rc.ai.atUsersRepeat': 'Duplicate @user ID',
  'rc.ai.atUsersMax': '@User (up to [{max}] digits)',
  'rc.ai.baseUrl': 'REST API Base URL',
  'rc.ai.baseUrlPleaseHolder': 'Please enter the REST API Base URL',
  'rc.ai.callbackUrl': 'Official callback address',
  'rc.ai.callbackUrlPleaseHolder': 'Please enter the official callback address',
  'rc.ai.choosetype': 'Select the alarm type',
  'rc.ai.connTimeout': 'Request timeout',
  'rc.ai.connTimeoutPleaseHolder': 'enter the request timeout(s)',
  'rc.ai.corpId': 'CorpId',
  'rc.ai.corpIdPleaseHolder': 'Please enter CorpId',
  'rc.ai.create': 'Create Alert Instance',
  'rc.ai.delete': 'Delete the Alert Instance ',
  'rc.ai.deleteConfirm': 'Are you sure to delete the selected Alert Instance? ',
  'rc.ai.dingTalk': 'DingTalk',
  'rc.ai.email': 'Email',
  'rc.ai.emailPassword': 'Email password',
  'rc.ai.emailPasswordPleaseHolder': 'Please enter the email password! Note',
  'rc.ai.emailUser': 'Email user',
  'rc.ai.emailUserPleaseHolder': 'Please enter your email username',
  'rc.ai.enableSmtpAuth': 'Enable SmtpAuth',
  'rc.ai.feishu': 'FeiShu',
  'rc.ai.isAtAll': 'IsAtAll',
  'rc.ai.isEnableProxy': 'IsEnableProxy',
  'rc.ai.isSimple': 'Is Simple Mode',
  'rc.ai.isSimple.no': 'No',
  'rc.ai.isSimple.yes': 'Yes',
  'rc.ai.keyword': 'KeyWord',
  'rc.ai.keywordPleaseHolder': 'please enter keyword',
  'rc.ai.management': 'Alert Instance Management',
  'rc.ai.suppliers': 'SMS Suppliers',
  'rc.ai.suppliersPleaseHolder': 'Please select a SMS supplier',
  'rc.ai.phoneNumbers': 'Phone Numbers',
  'rc.ai.phoneNumbersPleaseHolder': 'phone number',
  'rc.ai.mf.alibaba': 'Aliyun SMS',
  'rc.ai.mf.cloopen': 'CloOpen cloud domestic SMS',
  'rc.ai.mf.ctyun': 'Tianyi Cloud SMS',
  'rc.ai.mf.emay': 'Emay Softcom Domestic SMS',
  'rc.ai.mf.huawei': 'Huawei Cloud Domestic SMS',
  'rc.ai.mf.jdcloud': 'JD Cloud Domestic SMS',
  'rc.ai.mf.tencent': 'Tencent Cloud SMS',
  'rc.ai.mf.uni': 'Uni SMS',
  'rc.ai.mf.yunpian': 'Yunpian SMS',
  'rc.ai.modify': 'Modify Alert Instance',
  'rc.ai.search': 'Search Name/Type',
  'rc.ai.name': 'Name',
  'rc.ai.namePleaseHolder': 'please enter Alert instance name',
  'rc.ai.password': 'Password',
  'rc.ai.passwordPleaseHolder': 'please enter password',
  'rc.ai.port': 'Port',
  'rc.ai.portPleaseHolder': 'enter port',
  'rc.ai.proxy': 'Proxy',
  'rc.ai.proxyPleaseHolder': 'enter proxy',
  'rc.ai.receiverCcs': 'ReceiverCcs',
  'rc.ai.receiverCcsPleaseHolder': 'Please enter the receiverCcs email address!',
  'rc.ai.receiverCcsRepeat': 'Duplicate receiverCcs email address',
  'rc.ai.receiverCcsMax': 'ReceiverCcs (up to [{max}] digits)',
  'rc.ai.receivers': 'Receivers',
  'rc.ai.receiversPleaseHolder': 'Please enter recipient email address!',
  'rc.ai.receiversRepeat': 'Duplicate recipient email address',
  'rc.ai.receiversMax': 'Receivers (up to [{max}] digits)',
  'rc.ai.regionId': 'Regional Information',
  'rc.ai.regionIdPleaseHolder': 'Please enter the region information',
  'rc.ai.requestUrl': 'Request URL',
  'rc.ai.requestUrlPleaseHolder': 'Please enter the request URL',
  'rc.ai.secret': 'Secret',
  'rc.ai.secretKey': 'Access key secret',
  'rc.ai.secretKeyPleaseHolder': 'Please enter the access key secret',
  'rc.ai.secretPleaseHolder': 'please enter secret',
  'rc.ai.sendType': 'Send Type',
  'rc.ai.sendType.app': 'Application',
  'rc.ai.sendType.wechat': 'WeChat',
  'rc.ai.sendTypePleaseHolder': 'Please choose Send Type',
  'rc.ai.sender': 'Sender Nickname',
  'rc.ai.senderPleaseHolder': 'Please enter the mail server sender Nickname',
  'rc.ai.senders': 'Domestic SMS signature channel number',
  'rc.ai.sendersPleaseHolder': 'Please enter the domestic SMS signature channel number',
  'rc.ai.serverHost': 'Mail server Host',
  'rc.ai.serverHostPleaseHolder': 'Mail server host',
  'rc.ai.serverPort': 'Mail server Port',
  'rc.ai.serverPortPleaseHolder': 'Please enter the mail server port',
  'rc.ai.signature': 'SMS signature',
  'rc.ai.signaturePleaseHolder': 'Please enter the SMS signature',
  'rc.ai.sms': 'Sms',
  'rc.ai.smtpSslTrust': 'Smtp Ssl Trust',
  'rc.ai.smtpSslTrustPleaseHolder': 'Please enter a trusted domain',
  'rc.ai.sslEnable': 'Ssl Enable',
  'rc.ai.starttlsEnable': 'Start Tls Enable',
  'rc.ai.statusCallBack': 'Domestic SMS status report destination',
  'rc.ai.statusCallBackPleaseHolder':
    'Please enter the recipient of the domestic SMS status report',
  'rc.ai.templateId': 'SMS Template ID',
  'rc.ai.templateIdPleaseHolder': 'Please enter the SMS template ID',
  'rc.ai.templateName': 'Template variable',
  'rc.ai.templateNamePleaseHolder': 'Please enter the SMS template variable',
  'rc.ai.configId': 'Config ID',
  'rc.ai.configIdPleaseHolder': 'Please enter the unique config ID',
  'rc.ai.weight': 'Weight',
  'rc.ai.weightPleaseHolder': 'Please enter the weight',
  'rc.ai.retryInterval': 'Retry Interval(s)',
  'rc.ai.retryIntervalPleaseHolder': 'Please enter the retry interval',
  'rc.ai.maxRetries': 'Max Retries',
  'rc.ai.maxRetriesPleaseHolder': 'Please enter the maximum number of retries',
  'rc.ai.type': 'Type',
  'rc.ai.url': 'APP access address',
  'rc.ai.urlPleaseHolder':
    'Please enter the APP access address, the address obtained after creating the SMS application',
  'rc.ai.user': 'User',
  'rc.ai.userPleaseHolder': 'enter user',
  'rc.ai.version': 'version number',
  'rc.ai.versionPleaseHolder': 'Please enter the version number',
  'rc.ai.webhook': 'WebHook Url',
  'rc.ai.webhookPleaseHolder': 'please enter webhook url',
  'rc.ai.wechat': 'WeChat',
  'rc.ai.wechatAtUsersPleaseHolder':
    'Please enter the @user ID (enterprise and micro user name spelled out)',
  'rc.ai.http': 'HTTP',
  'rc.ai.http.url': 'Request address',
  'rc.ai.http.urlPleaseHolder': 'Please enter the request address',
  'rc.ai.http.method': 'Request method',
  'rc.ai.http.methodPleaseHolder': 'Please select the request method',
  'rc.ai.http.headers': 'Request headers',
  'rc.ai.http.body': 'Request body',
  'rc.ai.http.contentFiled': 'Content fields',
  'rc.ai.http.contentFiled.help':
    "In HTTP requests, the fields in the request body are replaced with 'Alarm Message', and if there are multiple layers of nested fields, use a JSON path expression, such as text.markdown.content",
  'rc.ai.http.titleFiled': 'Title field',
  'rc.ai.http.titleFiled.help':
    "In HTTP requests, the field in the request body is replaced with 'header content', if there are multiple layers of nested fields, please use a JSON path expression, such as markdown.title, if not, the title is concatenated in the content field by default",
  'rc.alert.template.create': 'Create Template',
  'rc.alert.template.modify': 'Modify Template',
  'rc.alert.template.new': 'Create an alert template',
  'rc.cc.addConfig': 'Add Config item',
  'rc.cc.baseConfig': 'Basic Config',
  'rc.cc.ckpDir': 'Checkpoint Path',
  'rc.cc.ckpDirHelp': 'Please enter the checkpoint path! This parameter configuration item is',
  'rc.cc.create': 'Create Cluster Config',
  'rc.cc.defineConfig': 'Flink Default Config (high priority)',
  'rc.cc.delete': 'Delete Cluster Config',
  'rc.cc.deleteConfig': 'Delete configuration item',
  'rc.cc.deleteConfirm': 'Are you sure to delete this cluster configuration? ',
  'rc.cc.docker.dinky.addr': 'Dinky Remote Address',
  'rc.cc.docker.dinky.addrHelp': 'Dinky remote address! eg',
  'rc.cc.docker.file': 'Docker Image File',
  'rc.cc.docker.fileHelp': 'Docker image file! eg',
  'rc.cc.docker.instance': 'Docker Instance',
  'rc.cc.docker.instanceHelp': 'Docker instance! eg',
  'rc.cc.docker.password': 'DockerHub Password',
  'rc.cc.docker.passwordHelp': 'DockerHub password! eg',
  'rc.cc.docker.tag': 'Docker Tag Version',
  'rc.cc.docker.tagHelp': 'Docker Tag version! eg',
  'rc.cc.docker.url': 'DockerHub Container Address',
  'rc.cc.docker.urlHelp': 'DockerHub container address! eg',
  'rc.cc.docker.username': 'DockerHub Username',
  'rc.cc.docker.usernameHelp': 'DockerHub username! eg',
  'rc.cc.flink.defineConfig': 'Flink Custom Config (high priority)',
  'rc.cc.flinkConfig': 'Flink Config',
  'rc.cc.flinkConfigPath': 'Flink Config File Path',
  'rc.cc.flinkConfigPathHelp':
    'Only specify to the folder, dinky will auto read the configuration, this parameter is optional in K8S mode',
  'rc.cc.flinkConfigPathPlaceholder':
    'Please enter the flink-conf.yaml path! Values such as /opt/module/flink/conf ',
  'rc.cc.hadoop.defineConfig': 'Hadoop Custom Config (high priority)',
  'rc.cc.hadoopConfig': 'Hadoop Config',
  'rc.cc.hadoopConfigPath': 'Hadoop Config file path',
  'rc.cc.hadoopConfigPathHelp':
    'Specify the configuration file path (without / at the end), the following files need to be included',
  'rc.cc.hadoopConfigPathPlaceholder':
    'Please enter the hadoop configuration file path, such as /etc/hadoop/conf! ',
  'rc.cc.jmMem': 'JobManager Memory',
  'rc.cc.jmMemHelp':
    'Please enter the JobManager memory size! This parameter configuration item is',
  'rc.cc.k8s.account': 'K8s Submit Account',
  'rc.cc.k8s.accountHelp': 'The account submitted by K8s, default default! eg',
  'rc.cc.k8s.configFile': 'Kube File Path',
  'rc.cc.k8s.configFileHelp':
    'Default ~/.kube/config, fill in the kube file path, which can be used as a remote connection! eg',
  'rc.cc.k8s.exposed': 'Exposed Port Type',
  'rc.cc.k8s.exposedHelp': 'Exposed port type! eg',
  'rc.cc.k8s.image': 'Flink Image Address',
  'rc.cc.k8s.imageHelp': 'Flink image address! eg',
  'rc.cc.k8s.jmCpu': 'JobManager CPU Config',
  'rc.cc.k8s.jmCpuHelp': 'JobManager CPU configuration! eg',
  'rc.cc.k8s.namespace': 'Kubernetes Namespace',
  'rc.cc.k8s.namespaceHelp': 'Kubernetes namespace! eg',
  'rc.cc.k8s.tmCpu': 'TaskManager CPU Config',
  'rc.cc.k8s.tmCpuHelp': 'TaskManager CPU configuration! eg',
  'rc.cc.k8sConfig': 'Kubernetes Config',
  'rc.cc.k8s.defaultKubeConfigHelp':
    'If you do not fill in this field, the `~/.kube/config` file will be used by default',
  'rc.cc.k8sOp.version': 'Flink Version',
  'rc.cc.k8sOp.versionHelp': 'Please select the Flink version!',
  'rc.cc.key': 'Config Key',
  'rc.cc.libPath': 'Flink Lib Path',
  'rc.cc.libPathHelp':
    'Specify the hdfs path of lib (without / at the end), which needs to include the dependencies of Flink runtime',
  'rc.cc.libPathPlaceholder': 'Please enter the hdfs path of lib! Values such as hdfs',
  'rc.cc.management': 'Cluster Config Management',
  'rc.cc.modify': 'Modify Cluster Config',
  'rc.cc.name': 'Cluster Config Name',
  'rc.cc.search': 'Search Name',
  'rc.cc.namePlaceholder': 'Please enter the cluster configuration name!',
  'rc.cc.spDir': 'Savepoint Path',
  'rc.cc.spDirHelp': 'Please enter the savepoint path! This parameter configuration item is',
  'rc.cc.sqlSubmitJarPath': 'Jar File Path',
  'rc.cc.sqlSubmitJarPathHelp':
    'Please enter the Jar file path! eg: hdfs:///dinky/dinky-app-1.16-with-dependencies.jar',
  'rc.cc.sqlSubmitJarPathHelpTips':
    'In Yarn mode, this parameter can be set to: hdfs:///dinky/dinky-app-1.17-with-dependencies.jar Alternatively, if rs:/dinky/inky app 1.17 with dependencies. jar is set to the rs:/ protocol, the jar package needs to be uploaded to Dinky`s resource center and the path filled in. In K8s mode, only the local://protocol is supported',
  'rc.cc.start': 'Start Session Cluster',
  'rc.cc.submitSqlConfig': 'Submit FlinkSQL Config items',
  'rc.cc.tmHeap': 'TaskManager Heap Memory',
  'rc.cc.tmHeapHelp':
    'Please enter the TaskManager heap memory size! This parameter configuration item is',
  'rc.cc.tmMem': 'TaskManager Memory',
  'rc.cc.tmMemHelp':
    'Please enter the TaskManager memory size! This parameter configuration item is',
  'rc.cc.tsNum': 'Number of Slots',
  'rc.cc.tsNumHelp': 'Please enter the number of TaskSlot! eg',
  'rc.cc.type': 'Type',
  'rc.cc.typePlaceholder': 'Please select the cluster configuration type!',
  'rc.cc.value': 'Config Value',
  'rc.cc.loadFromLocal': 'Load from a local file',

  'rc.ci.alias': 'Alias',
  'rc.ci.aliasPlaceholder': 'Please enter an alias!',
  'rc.ci.ar': 'Auto Registration',
  'rc.ci.mr': 'Manual Registration',
  'rc.ci.create': 'Create Cluster Instance',
  'rc.ci.deleteConfirm': 'Are you sure to delete this Flink Cluster instance? ',
  'rc.ci.heartbeat': 'Heartbeat Detection',
  'rc.ci.killConfirm':
    'Are you sure to stop this Flink Cluster instance?  Please note that after stopping, it will not be recovered! The associated task will affect, please be careful!',
  'rc.ci.kill': 'Stop Flink Cluster Instance',
  'rc.ci.jma': 'JM Address',
  'rc.ci.jmha': 'JobManager HA Address',
  'rc.ci.jmha.tips':
    'Add the RestApi address of the JobManager of the Flink cluster. In HA mode, the addresses are separated by commas, for example: 192.168.123.101:8081',
  'rc.ci.jmha.validate.port': 'Does not meet the rules! Port number range [0-65535]',
  'rc.ci.jmha.validate.slash': 'Does not comply with the rules! Cannot contain /',
  'rc.ci.jmhaPlaceholder': 'Please enter the JobManager HA address!',
  'rc.ci.management': 'Cluster Instance Management',
  'rc.ci.modify': 'Modify cluster Instance',
  'rc.ci.name': 'Name',
  'rc.ci.autoRegisterCannotModify':
    'Automatically registered instances can only modify the `JobManager high-availability address` attribute, and others cannot be modified!',
  'rc.ci.namePlaceholder': 'Please enter a name!',
  'rc.ci.recycle': 'Recycle Flink Cluster Instances',
  'rc.ci.recycleConfirm':
    'Are you sure to recycle all automatically created and expired Flink instances? ',
  'rc.ci.status': 'Status',
  'rc.ci.type': 'Type',
  'rc.ci.typePlaceholder': 'Please select a cluster type!',
  'rc.ci.version': 'Version',
  'rc.ci.desc': 'Note',
  'rc.ci.search': 'Search Name/Alias/Note',
  'rc.doc.category': 'Register Type',
  'rc.doc.categoryPlaceholder': 'Please select the type of this Document!',
  'rc.doc.create': 'Create Document',
  'rc.doc.delete': 'Delete Document',
  'rc.doc.deleteConfirm': 'Are you sure you want to delete the this Document? ',
  'rc.doc.description': 'Description',
  'rc.doc.descriptionPlaceholder': 'Please enter the Document description information!',
  'rc.doc.fillValue': 'Fill Value',
  'rc.doc.fillValueHelp': 'Please enter the fill value',
  'rc.doc.fillValuePlaceholder':
    'Please enter the fill value, use the name in the editor to trigger the prompt eg',
  'rc.doc.functionType': 'Document Type',
  'rc.doc.management': 'Document Management',
  'rc.doc.modify': 'Modify Document',
  'rc.doc.name': 'Name',
  'rc.doc.namePlaceholder': 'Please enter a name!',
  'rc.doc.subFunctionType': 'SubType',
  'rc.doc.subTypePlaceholder': 'Please select the function type this Document belongs to!',
  'rc.doc.typePlaceholder': 'Please select the function type this Document belongs to!',
  'rc.doc.version': 'Version',
  'rc.doc.versionPlaceholder': 'Please select the version this Document belongs to!',
  'rc.ds.application': 'Application',
  'rc.ds.autoIncrement': 'Autoincrement',
  'rc.ds.backup': 'Backup',
  'rc.ds.character': 'Character Set',
  'rc.ds.collationRule': 'Collation Rule',
  'rc.ds.columnName': 'Field Name',
  'rc.ds.columnType': 'Type',
  'rc.ds.comment': 'Comment',
  'rc.ds.search': 'Search Name/Note',
  'rc.ds.console.exec': 'Execute',
  'rc.ds.console.running': 'Running...',
  'rc.ds.detail.tag.console.clear.log': 'Clear Log...',
  'rc.ds.create': 'Create DataSource',
  'rc.ds.decimalDigits': 'Decimal Range',
  'rc.ds.default': 'Default Value',
  'rc.ds.delete': 'Delete DataSource',
  'rc.ds.deleteConfirm': 'Are you sure to delete this DataSource? ',
  'rc.ds.detail.tag.console': 'Console',
  'rc.ds.detail.tag.desc': 'Description',
  'rc.ds.detail.tag.gensql': 'Generate SQL',
  'rc.ds.detail.tag.query': 'Query',
  'rc.ds.detail.tips': 'Click on the table on the left to get relevant information',
  'rc.ds.enter':
    'Click the icon picture in the list to enter the details page of the DataSource! Support viewing the database & table information of the DataSource, and timely query',
  'rc.ds.enter.error':
    'The DataSource status is abnormal and cannot be entered, only after the heartbeat is normal!',
  'rc.ds.flinkConfig': 'Flink Connection Config',
  'rc.ds.flinkConfigTooltip':
    'Avoid disclosure of private information, and reuse the connection configuration as a global variable. In FlinkSQL, you can use `variable reference method` to load the connection configuration. Explanation',
  'rc.ds.flinkTemplate': 'Flink Connection Template',
  'rc.ds.flinkTemplateTooltip':
    'Flink connection template is an extended function for generating FlinkSQL DDL. Among them, the schemaName in `variable reference method` refers to dynamically obtaining the database, and the tableName in `variable reference method` refers to dynamically obtaining the table name',
  'rc.ds.groupName': 'Group Type',
  'rc.ds.groupNamePlaceholder': 'Please select a group type!',
  'rc.ds.isNull': 'Not Null',
  'rc.ds.javaType': 'Java Type',
  'rc.ds.length': 'Length',
  'rc.ds.management': 'DataSource Management',
  'rc.ds.modify': 'Modify DataSource',
  'rc.ds.name': 'Name',
  'rc.ds.namePlaceholder': 'Please enter a name!',
  'rc.ds.no': 'No.',
  'rc.ds.other': 'Other',
  'rc.ds.password': 'Password',
  'rc.ds.passwordPlaceholder': 'Please enter password!',
  'rc.ds.precision': 'Precision',
  'rc.ds.primarykey': 'Primary Key',
  'rc.ds.source': 'Source',
  'rc.ds.type': 'DataSource Type',
  'rc.ds.typePlaceholder': 'Please select the DataSource type! Enter keywords to search',
  'rc.ds.url': 'Database URL',
  'rc.ds.urlPlaceholder': 'Please enter a properly formatted url link!',
  'rc.ds.username': 'Username',
  'rc.ds.usernamePlaceholder': 'Please enter username!',
  'rc.ds.warehouse': 'Data Warehouse',
  'rc.gp.branch': 'Branch',
  'rc.gp.branchPlaceholder': 'Please select a branch!',
  'rc.gp.build': 'Build',
  'rc.gp.build.step.0': 'No Build',
  'rc.gp.build.step.1': 'Check Env',
  'rc.gp.build.step.2': 'Git Clone',
  'rc.gp.build.step.3': 'Maven Build',
  // 获取产物
  'rc.gp.build.step.4': 'Get Artifact',
  'rc.gp.build.step.5': 'Analysis UDF',
  'rc.gp.build.step.6': 'Finish',
  'rc.gp.buildArgs':
    'Build parameters: Instructions need to be included in characters, please use single quotes \'\', double quotes will be escaped as \\"\\"',
  'rc.gp.buildConfirm': 'Are you sure to start building this project? ',
  'rc.gp.buildFail': 'Build failed',
  'rc.gp.buildState': 'Build State',
  'rc.gp.buildStep': 'Build Step',
  'rc.gp.buildSuccess': 'Build successfully',
  'rc.gp.building': 'Building',
  'rc.gp.codeTree': 'Show Code',
  'rc.gp.codeTree.clickShow': 'Click left file to view code',
  'rc.gp.codeTree.unSupportView': 'This file type does not support viewing',
  'rc.gp.codeType': 'Code Type',
  'rc.gp.codeTypePlaceholder': 'Please select the code type!',
  'rc.gp.create': 'Create Project',
  'rc.gp.delete': 'Delete Project',
  'rc.gp.deleteConfirm':
    'This operation will delete all downloaded codes under this project \nplease operate with caution \nthis operation is irreversible!! \nAre you sure to delete this Project? ',
  'rc.gp.lastBuild': 'LastBuild Time',
  'rc.gp.level': 'Level',
  'rc.gp.level.tooltip':
    'The smaller the number, the higher the priority, and the scanned UDF classes are repeatedly linked to the priority',
  'rc.gp.log': 'Log',
  'rc.gp.management': 'GitProject Management(Beta)',
  'rc.gp.modify': 'Modify Project',
  'rc.gp.name': 'Name',
  'rc.gp.namePlaceholder': 'Please enter Project name!',
  'rc.gp.notBuild': 'Not built',
  'rc.gp.password': 'Password',
  'rc.gp.passwordPlaceholder': 'Please enter a password!',
  'rc.gp.pom': 'Pom File Path',
  'rc.gp.pomPlaceholder': 'Please enter the pom file path!',
  'rc.gp.privateKey': 'Private Key Path',
  'rc.gp.privateKeyPlaceholder': 'private key path, eg',
  'rc.gp.type': 'Clone Mode',
  'rc.gp.ucl.jarOrder': ' Jar Level Ordering',
  'rc.gp.ucl.jarPath': 'Jar Path',
  'rc.gp.ucl.orderLine': 'Jar Priority',
  'rc.gp.ucl.orderLine.tooltip':
    'The smaller the number, the higher the priority of loading UDF in Jar',
  'rc.gp.ucl.projectOrder': 'Project Level Ordering',
  'rc.gp.url': 'Project URL',
  'rc.gp.urlPlaceholder': 'Please enter the project address!',
  'rc.gp.username': 'Username',
  'rc.gp.usernamePlaceholder': 'Please enter a username!',
  'rc.gv.Management': 'Global Variable Management',
  'rc.gv.create': 'Create Global Variable',
  'rc.gv.delete': 'Delete Global Variable',
  'rc.gv.deleteConfirm': 'Are you sure you want to delete this Global Variable? ',
  'rc.gv.modify': 'Modify Global Variables',
  'rc.gv.name': 'Name',
  'rc.gv.namePlaceholder': 'Please enter a name!',
  'rc.gv.value': 'Value',
  'rc.gv.valuePlaceholder': 'Please enter the Global Variable value',
  'rc.resource.click': 'Click left file to view details',
  'rc.resource.click.tip1':
    'please make sure the resource configuration is correct, otherwise it will cause resource upload failure!',
  'rc.resource.click.tip2':
    'If the resource configuration of your configuration center does not configure the resource upload path or use the default resource upload path (/dinky)',
  'rc.resource.click.tip3': 'You can click the link on the right to configure ->',
  'rc.resource.upload': 'Upload Files/Folders',
  'rc.resource.upload.success': 'File [{fileName}] Upload successfully',
  'rc.resource.upload.fail': 'File [{fileName}] Upload failed',
  'rc.resource.upload.tip1': 'Click or drag file to this area to upload',
  'rc.resource.upload.tip2':
    'Support for a single or bulk upload. Strictly prohibited from uploading company data or\n          other banned files.',
  'rc.resource.filelist': 'File list',
  'rc.resource.sync': 'Sync remote files',
  'rc.resource.sync.confirm':
    'Please note that this operation will delete all records in the database and will affect running jobs as well as corresponding resource files referenced in UDF management, resulting in job failure. And UDF cannot be used in UDF management Please operate with caution!! Please confirm if you want to continue?',
  'rc.resource.copy_to_add_custom_jar': 'Copy as ADD CUSTOMJAR syntax',
  'rc.resource.copy_to_add_jar': 'Copy as ADD JAR syntax',
  'rc.resource.copy_to_add_file': 'Copy as ADD FILE syntax',
  'rc.resource.copy_to_add_rs_path': 'Copy RS protocol resource path',
  'rc.resource.copy_success':
    'Copy successfully, The value is: [{fillValue}] has been copied to the clipboard. Please paste it to the desired location for use',
  'rc.resource.enable': 'Resource management function is not enabled',
  'rc.resource.enable.tips':
    'Please go to [Setting Center -> Global Settings -> Resource Configuration] to enable the resource management function!!!',
  'rc.resource.delete': 'Delete Resource',
  'rc.resource.deleteConfirm':
    'We have detected that you have enabled physical deletion mode. Once executed, it cannot be restored and this operation is irreversible. Are you sure you want to delete this resource file?',

  'rc.template.codeType': 'Code Type',
  'rc.template.codeTypePlaceholder': 'Please select code type! ',
  'rc.template.create': 'Create UDF Template',
  'rc.template.delete': 'Delete Template! ',
  'rc.template.deleteConfirm': 'Are you sure you want to delete this template?',
  'rc.template.functionType': 'Function Type',
  'rc.template.functionTypePlaceholder': 'Please select function type! ',
  'rc.template.modify': 'Modify UDF Template',
  'rc.template.name': 'Template Name',
  'rc.template.namePlaceholder': 'Please enter the template name! ',
  'rc.template.templateCode': 'Template Code',
  'rc.template.templateCodeLabel': 'Template Code( {language} )',
  'rc.template.templateCodePlaceholder': 'Please edit the template code! ',
  'rc.udf.template.management': 'UDF Template Management',
  'rc.udf.register.management': 'UDF Register Management',
  'rc.udf.register.file.name': 'File Name',
  'rc.udf.register.parse.count': 'UDF Parse Count',
  'rc.udf.register.source': 'Source',
  'rc.udf.register.language': 'Language',
  'rc.udf.register.name': 'UDF Name',
  'rc.udf.register.className': 'Class Name',
  'rc.udf.register.deleteConfirm': 'Are you sure you want to delete this UDF? ',
  'rc.udf.register': 'Register UDF',
  'rc.udf.register.select': 'Please select a non-directory node',
  /**
   *
   * role
   *
   * */

  'role.EnterNote': 'Please enter Role Note!',
  'role.EnterRoleCode': 'Please enter Role Code!',
  'role.EnterRoleName': 'Please enter Role Name!',
  'role.assign': 'Assign Permissions',
  'role.assignMenu': 'Role: {roleName}, Assign Menu',
  'role.belongTenant': 'Belong Tenant',
  'role.create': 'Create Role',
  'role.delete': 'Delete Role',
  'role.deleteConfirm': 'Are you sure you want to delete this Role？',
  'role.roleCode': 'Role Code',
  'role.roleManagement': 'Role Management',
  'role.roleManagement.tips':
    'The system has assigned [Admin] users by default when creating tenants, which means that all tenants will include [Admin] users. When creating roles, it is not possible to freely specify tenants. If you need to specify a non current tenant, please select the tenant according to your own needs and switch in the upper right corner (if there is no new tenant in the options, please refresh the page after the tenant is successfully created). After the switch is completed, perform related operations such as creating roles and role empowerment',
  'role.roleName': 'Role Name',
  'role.update': 'Update Role',
  'role.user.list': 'Role of User List',
  /**
   *
   * rowPermissions
   *
   * */

  'rowPermissions.create': 'Create Row Permissions',
  'rowPermissions.deleteConfirm': 'Are you sure you want to delete this row permissions',
  'rowPermissions.expression': 'Expression',
  'rowPermissions.expressionPlaceholder': 'Please enter expression',
  'rowPermissions.management': 'Row Permissions Management',
  'rowPermissions.roleName': 'Role Name',
  'rowPermissions.roleNamePlaceholder': 'Please select an role',
  'rowPermissions.tableName': 'Table name',
  'rowPermissions.tableNamePlaceholder': 'Please enter table name',
  'rowPermissions.update': 'Update Row Permissions',
  /**
   *
   * sys
   *
   * */
  'sys.alert.rule.label.taskId': 'Task ID',
  'sys.alert.rule.label.duration': 'Running time',
  'sys.alert.rule.label.batchModel': 'Batch mode',
  'sys.alert.rule.label.jobType': 'Execution mode',
  'sys.alert.rule.label.jobException': 'The job is abnormal',
  'sys.alert.rule.label.checkpointFailed': 'Checkpoint Failed',
  'sys.alert.rule.label.checkpointTime': 'Checkpoint Time',
  'sys.alert.rule.label.jobStatus': 'Job status',
  'sys.alert.rule.addRule': 'Add Rule',
  'sys.alert.rule.allRule': 'All Rules',
  'sys.alert.rule.anyRule': 'Any Rule',
  'sys.alert.rule.delete': 'Are you sure you want to delete this alert rule?',
  'sys.alert.rule.name': 'Alert Rule Name',
  'sys.alert.rule.rule': 'Rule',
  'sys.alert.rule.ruleType': 'Rule Type',
  'sys.alert.rule.template': 'Alert Template',
  'sys.alert.rule.trigger': 'Trigger Configuration',
  'sys.alert.rule.triggerConditions': 'Trigger Conditions',
  'sys.alert.rule.triggerRule': 'Trigger Rule',
  'sys.info.logList.tips': 'Click left log file to viewing',
  'sys.process.duration': 'Duration',
  'sys.process.endTime': 'End Time',
  'sys.process.id': 'Process ID',
  'sys.process.name': 'Process Name',
  'sys.process.operator': 'Operator',
  'sys.process.startTime': 'Start Time',
  'sys.process.status': 'Status',
  'sys.process.subStep.error': 'Step Error',
  'sys.process.subStep.info': 'Step Info',
  'sys.process.subStep.status': 'Step Status',
  'sys.process.taskId': 'Job ID',
  'sys.process.type': 'Type',
  'sys.process.viewErrorLog': 'View Error Level Log',
  'sys.process.viewInfoLog': 'View Info Level Log',
  'sys.setting.dinky': 'Dinky Env Configuration',
  'sys.setting.dinky.tooltip':
    'Mainly modify system variables to ensure stable operation of basic functions',
  'sys.setting.ds': 'DolphinScheduler Configuration',
  'sys.setting.ds.tooltip':
    'DolphinScheduler plug-in settings that allow you to push dinky tasks to the DolphinScheduler workflow',
  'sys.setting.flink': 'Flink Configuration',
  'sys.setting.flink.tooltip': 'Dinky docking Flink main parameters',
  'sys.setting.ldap': 'LDAP Configuration',
  'sys.setting.ldap.tooltip': 'Unified authentication service LDAP docking configuration',
  'sys.setting.maven': 'Maven Configuration',
  'sys.setting.maven.tooltip': 'The main parameters of Maven compilation',
  'sys.setting.metrics': 'Metrics Configuration',
  'sys.setting.metrics.tooltip': 'Monitor monitoring page settings, adjust Metrics detection',
  'sys.setting.modify': 'Modify Settings {key}',
  'sys.setting.resource': 'Resource Configuration',
  'sys.setting.tag.core': 'Core Configuration',
  'sys.setting.tag.extend': 'Extended Configuration',
  'sys.setting.tag.integration': 'Integration Configuration',
  'sys.setting.tag.system': 'System Configuration',
  'sys.ldap.settings.testConnect': 'Test Connect',
  'sys.ldap.settings.testConnect.success': 'Test Connect Successful, {count} users were obtained',
  'sys.ldap.settings.testLogin': 'Test Login',
  'sys.ldap.settings.loadUser': 'Load User',
  'sys.ldap.settings.keyword':
    'You can enter your username/nickname for search, support fuzzy queries, enter keywords and press enter to complete the search',
  'sys.ldap.settings.loadable': 'Whether it can be imported',
  'sys.setting.ingress': 'Ingress configuration',
  /**
   *
   * tenant
   *
   * */

  'tenant.AssignUser': 'Assign Users',
  'tenant.EnterTenantCode': 'Please enter Tenant Code!',
  'tenant.EnterTenantNote': 'Please enter Tenant Note!',
  'tenant.TenantCode': 'Tenant Code',
  'tenant.TenantManager': 'Tenant Management',
  'tenant.cancel.admin': 'Cancel Tenant Admin',
  'tenant.create': 'Create Tenant',
  'tenant.delete': 'Delete Tenant',
  'tenant.deleteConfirm': 'Are you sure you want to delete this Tenant？',
  'tenant.set.admin': 'Set Tenant Admin',
  'tenant.update': 'Update Tenant',
  'tenant.user.list': 'User List',
  /**
   *
   * token
   *
   * */

  'token.choose.expireType': 'Please choose expire type',
  'token.create': 'Create Token',
  'token.deleteConfirm': 'Are you sure you want to delete this Token？',
  'token.expireEndTime': 'Expire End Time',
  'token.expireStartTime': 'Expire Start Time',
  'token.expireTime': 'Expire Time',
  'token.expireTime.placeholder': 'Please choose expire time',
  'token.expireType': 'Expire Type',
  'token.expireType.1': 'Never Expire',
  'token.expireType.2': 'Expire Time',
  'token.expireType.3': 'Expire Range Time',
  'token.generate': 'Generate Token',
  'token.generate.placeholder': 'Please generate token',
  'token.manager': 'Token Management',
  'token.role': 'Role',
  'token.role.choose': 'Please choose role',
  'token.tenant': 'Tenant',
  'token.tenant.choose': 'Please choose tenant',
  'token.update': 'Update Token',
  'token.user.choose': 'Please choose user',
  'token.username': 'User',
  'token.value': 'Token',
  /**
   *
   * user
   *
   * */

  'user.assignRole': 'Assign Role',
  'user.changePasswordSuccess':
    'Password changed successfully, will jump to the login page to re-login!',
  'user.create': 'Create User',
  'user.current.tenant': 'Current Tenant',
  'user.delete': 'Delete User',
  'user.deleteConfirm': 'Are you sure delete this User？',
  'user.info': 'Personal Info',
  'user.isdelete': 'The user has been deleted and cannot be reset, please recover the user first!',
  'user.jobnumber': 'Job Number',
  'user.jobnumberPlaceholder': 'Please enter job number',
  'user.login.accesstime': 'Login Time',
  'user.login.ip': 'Login IP',
  'user.login.status.code': 'Code',
  'user.login.status.msg': 'Message',
  'user.loginlog': 'Login Log',
  'user.manager': 'User Management',
  'user.newpwd': 'New Password',
  'user.newpwdPlaceholder': 'Please enter new password',
  'user.nickname': 'Nick Name',
  'user.nicknamePlaceholder': 'Please enter nickname',
  'user.oldNewPwdNoMatch': 'The new passwords do not match',
  'user.oldpwd': 'Old Password',
  'user.oldpwdPlaceholder': 'Please enter old password',
  'user.op': 'Operation',
  'user.op.error.msg': 'Error Message',
  'user.op.ip': 'IP',
  'user.op.method': 'Method',
  'user.op.module': 'Module',
  'user.op.name': 'User',
  'user.op.params': 'Params',
  'user.op.result': 'Result',
  'user.op.status': 'Status',
  'user.op.time': 'Operation Time',
  'user.op.type': 'Type',
  'user.op.url': 'URL',
  'user.phone': 'Phone Number',
  'user.phonePlaceholder': 'Please enter phone number',
  'user.recovery': 'Are you sure to Recover this User?',
  'user.repeatpwd': 'Repeat New Password',
  'user.repeatpwdPlaceholder': 'Please enter repeat new password',
  'user.request.type': 'Type',
  'user.reset': 'Are you sure to Reset this User Password?',
  'user.resetPassword': 'Reset your password',
  'user.resetPasswordSuccess':
    'User [{username}] reset password successfully, new password: {password}',
  'user.role': 'Role',
  'user.status': 'Is Deleted',
  'user.superAdminFlag': 'Super Admin',
  'user.tenant': 'Tenant',
  'user.tenantAdminFlag': 'Tenant Admin',
  'user.type': 'User Type',
  'user.update': 'Modify User',
  'user.username': 'User Name',
  'user.usernamePlaceholder': 'Please enter user name',
  'user.phoneFormat': 'The format of the phone number is incorrect',

  'lineage.getError': 'Cannot Get Lineage',
  'lineage.expandField': 'Expand Field(UnSupported)',
  'lineage.collapseField': 'Collapse Field(UnSupported)',
  'lineage.expandDownstream': 'Expand Downstream(UnSupported)',
  'lineage.collapseDownstream': 'Collapse Downstream(UnSupported)',
  'lineage.expandUpstream': 'Expand Upstream(UnSupported)',
  'lineage.collapseUpstream': 'Collapse Upstream(UnSupported)',
  'lineage.showMap': 'Show Map',
  'lineage.hideMap': 'Hide Map',
  'lineage.refresh': 'Refresh',

  'sys.classLoaderJars.tips':
    'The following content shows the list of jar packages loaded by the system class loader inside the Dinky service. In this way, you can visually view all Jar files that have been loaded inside the service to help troubleshoot Jar package conflicts and other issues.',

  'dashboard.create': 'Create Dashboard',
  'dashboard.add': 'Add Chart',
  'dashboard.chart.name': 'Chart Name',
  'dashboard.chart.select': 'Please select a chart',
  'dashboard.update': 'Edit Chart',
  'dashboard.name': 'Dashboard Name',
  'dashboard.name.maxLength': 'The maximum length is 32 characters',
  'dashboard.namePlaceholder': 'Please enter the dashboard name',
  'dashboard.remark': 'Description',
  'dashboard.remarkPlaceholder': 'Please enter the description',
  'dashboard.chartTheme': 'Chart Theme',
  'dashboard.selectChartTheme': 'Please select a Chart theme',
  'dashboard.delete': 'Delete Dashboard',
  'dashboard.deleteConfirm': 'Are you sure to delete this Dashboard？',
  'dashboard.theme.chalk': 'Chalk',
  'dashboard.theme.dark': 'Dark',
  'dashboard.theme.essos': 'Essos',
  'dashboard.theme.infographic': 'Infographic',
  'dashboard.theme.macarons': 'Macarons',
  'dashboard.theme.purple-passion': 'Purple-Passion',
  'dashboard.theme.roma': 'Roma',
  'dashboard.theme.shine': 'Purple',
  'dashboard.theme.vintage': 'Vintage',
  'dashboard.theme.westeros': 'Westeros',
  'dashboard.theme.wonderland': 'Wonderland'
};
