const company = {
    name: 'Site Guru',
    departments: [
        {
            name: 'Engineering',
            teams: [
                {
                    teamName: 'Frontend',
                    members: [
                        { id: 1, name: 'Asha', skills: ['Vue', 'JavaScript', 'CSS'] },
                        { id: 2, name: 'Ravi', skills: ['React', 'JavaScript'] }
                    ]
                },
                {
                    teamName: 'Backend',
                    members: [
                        { id: 3, name: 'Neha', skills: ['Node', 'MySQL', 'Vue'] }
                    ]
                }
            ]
        },
        {
            name: 'Design',
            teams: [
                {
                    teamName: 'UI',
                    members: [
                        { id: 4, name: 'Karan', skills: ['Figma', 'CSS'] }
                    ]
                }
            ]
        }
    ]
};

const vueDevelopers = [];

// Traverse all departments
company.departments.forEach(department => {

    // Traverse all teams inside department
    department.teams.forEach(team => {

        // Traverse all members inside team
        team.members.forEach(member => {

            // Check whether member knows Vue
            if (member.skills.includes('Vue')) {
                vueDevelopers.push(member.name);
            }

        });

    });

});

console.log(vueDevelopers);