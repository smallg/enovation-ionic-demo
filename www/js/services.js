angular.module('starter.services', [])
    .factory('Project', function () {
        var projects = [
            { id: 0, name: 'LSPConnect Medication Viewer', description: 'see https://wiki.enovation.nl/index.php/LSPConnect_Viewer', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1' },
            { id: 1, name: 'User Console', description: 'see https://wiki.enovation.nl/index.php/User_Console', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1' },
            { id: 2, name: 'System Console', description: 'see https://wiki.enovation.nl/index.php/System_Console', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1' },
            { id: 3, name: 'OZIS Connect', description: 'see https://wiki.enovation.nl/index.php/OZIS_Connect', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1' },
            { id: 4, name: 'Release 1.6.0', description: 'see https://wiki.enovation.nl/index.php/Release 1.6.0', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1'}
        ];
        return {
            all: function () {
                return projects;
            },
            get: function (projectId) {
                return projects[projectId];
            }
        }
    })
    .factory('Story', function () {
        var stories = [
            { id: 0, name: 'LSPConnect Medication Viewer', description: 'see https://wiki.enovation.nl/index.php/LSPConnect_Viewer', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1' },
            { id: 1, name: 'User Console', description: 'see https://wiki.enovation.nl/index.php/User_Console', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1' },
            { id: 2, name: 'System Console', description: 'see https://wiki.enovation.nl/index.php/System_Console', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1' },
            { id: 3, name: 'OZIS Connect', description: 'see https://wiki.enovation.nl/index.php/OZIS_Connect', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1' },
            { id: 4, name: 'Release 1.6.0', description: 'see https://wiki.enovation.nl/index.php/Release 1.6.0', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1'}
        ];
        return {
            all: function () {
                return stories;
            },
            get: function (storyId) {
                return stories[storyId];
            }
        }
    })
    .factory('Task', function () {
        var tasks = [
            { id: 0, name: 'LSPConnect Medication Viewer', description: 'see https://wiki.enovation.nl/index.php/LSPConnect_Viewer', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1' },
            { id: 1, name: 'User Console', description: 'see https://wiki.enovation.nl/index.php/User_Console', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1' },
            { id: 2, name: 'System Console', description: 'see https://wiki.enovation.nl/index.php/System_Console', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1' },
            { id: 3, name: 'OZIS Connect', description: 'see https://wiki.enovation.nl/index.php/OZIS_Connect', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1' },
            { id: 4, name: 'Release 1.6.0', description: 'see https://wiki.enovation.nl/index.php/Release 1.6.0', owner: 'Small.guo', createTime: '2012/7/30', modifyTime: '2012/8/1'}
        ];
        return {
            all: function () {
                return tasks;
            },
            get: function (taskId) {
                return tasks[taskId];
            }
        }
    });
