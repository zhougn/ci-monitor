(function() {
    var projects = {
        'f16372ff-d202-80d2-9299-10229014d1f2': {
            'id': 'f16372ff-d202-80d2-9299-10229014d1f2',
            'name': 'Master',
            'status': 'success'
        },

        'f16372ff-d202-80d2-9299-10229014d1f3': {
            'id': 'f16372ff-d202-80d2-9299-10229014d1f3',
            'name': 'Branch 1.x',
            'status': 'success',
            'is_building': true,
            'building_progress': 20
        },

        'f16372ff-d202-80d2-9299-10229014d1f4': {
            'id': 'f16372ff-d202-80d2-9299-10229014d1f4',
            'name': 'Branch 2.x',
            'status': 'failure'
        },

        'fa27b745-3636-f348-8d69-65c8f666e585': {
            'id': 'fa27b745-3636-f348-8d69-65c8f666e585',
            'name': 'Branch 3.x',
            'status': 'failure',
            'is_building': true,
            'building_progress':  40
        },

        'f16372ff-d202-80d2-9299-10229014d1f6': {
            'id': 'f16372ff-d202-80d2-9299-10229014d1f6',
            'name': 'Lab'
        },

        'f16372ff-d202-80d2-9299-10229014d1f7': {
            'id': 'f16372ff-d202-80d2-9299-10229014d1f7',
            'name': 'Lab Branch 1.x',
            'is_building': true,
            'building_progress':  60
        }
    };

    localStorage.setItem('projects', JSON.stringify(projects));
})();
