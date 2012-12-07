(function(root) {

    var Project = root.Project = Backbone.Model.extend({
    });

    var ProjectView = root.ProjectView = Backbone.View.extend({
        template: Handlebars.templates.project,

        render: function() {
            this.setElement($(this.template(this.model.toJSON())));
            return this;
        }
    });

    var ProjectList = Backbone.Collection.extend({
        model: Project,
        localStorage: new Store('projects')
    });
    var Projects = root.Projects = new ProjectList();

    $(function() {
        var $body = $('body');

        Projects.fetch();
        Projects.each(function(project) {
            var projectView = new ProjectView({model: project});
            $body.append(projectView.render().el);
        });
    });
})(this);
