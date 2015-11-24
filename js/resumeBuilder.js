jQuery(function(){
    var model = {
        init: function() {
            this.bio = {
                "name" : "Fry",
                "role" : "Pizza guy",
                "contacts" : [{
                    "mobile" : "123456",
                    "email" : "fry@planetexpress.com",
                    "location" : "New New York",
                    "twitter" : "@fry",
                    "github" : "fry"
                }],
                "welcomeMessage" : "Shut up and take my money!",
                "image" : "images/fry.jpg",
                "skills" : ["Walking","Sneezing"]
            };

            this.education = {
                "schools" : [
                    {
                        "name" : "Slacker University",
                        "location" : "New New York",
                        "degree" : "Bachelor",
                        "majors" : "Nosepicking",
                        "dates" : "2003-2005",
                        "url" : "www.slacker.com"
                    },
                    {
                        "name" : "Nogood College",
                        "location" : "Upstate New York",
                        "degree" : "Master",
                        "majors" : "Traveling",
                        "dates" : "2005 - 2006",
                        "url" : "www.nogood.com"
                    }],
                "online courses" : [{
                    "title" : "Sleeping",
                    "school" : "No",
                    "dates" : "1970-1980",
                    "url" : "www.dontwanna.com"
                }]
            };

            this.work = {
                "jobs" : [
                    {
                        "employer" : "My boss",
                        "title" : "Boss",
                        "dates" : "1990-3000",
                        "location" : "New New York",
                        "description" : "Nothing much."
                    }
                ]
            };

            this.projects = {
                "project" : [{
                    "title" : "Watching grass grow",
                    "dates" : "2014",
                    "description" : "The fascinating study of why we have to mow lawns",
                    "images" : ["images/1.jpg","images/2.jpg"]
                },
                    {
                        "title" : "Whatever",
                        "dates" : "2014",
                        "description" : "Dunno",
                        "images" : ["images/1.jpg"]
                    }]
            };
        }
    };

    var octopus = {
        init: function() {
            model.init();
            view.init();
        },
        getBio: function() {
            return model.bio;
        },
        getEducation: function() {
            return model.education;
        },
        getWork: function() {
            return model.work;
        },
        getProjects: function() {
            return model.projects;
        }
    };

    var view = {
        init: function() {
            var bio = octopus.getBio();
            var education = octopus.getEducation();
            var work = octopus.getWork();
            var projects = octopus.getProjects();

            this.setHeader(bio);

            var workExperience = jQuery("#workExperience");

            jQuery(workExperience).append(HTMLworkStart);

        },
        setHeader: function(bio) {
            var header = jQuery("#header");
            jQuery(header).prepend(HTMLheaderRole.replace("%data%", bio.role));
            jQuery(header).prepend(HTMLheaderName.replace("%data%", bio.name));
        }
    };

    octopus.init();
});