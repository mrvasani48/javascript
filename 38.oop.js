var person = {
    fname: "kishan",
    mname: "d",
    lname: "vasani",
    no: "180200107118",
    clg: "gecr",
    fullname: () => {
        return (person.fname + " " + person.mname + " " + person.lname);
    }
};
document.write(person.fullname() + "<br>");
document.write(person + "<br>");
document.write(person.clg + "<br>");
//
var man = {}
man.fname = "kishan";
man.mname = "d";
man.lname = "vasani";
man.no = "180200107118";
man.clg = "gecr";
man.fullname = () => {
    return (person.fname + " " + person.mname + " " + person.lname);
};
man.man_all = () => {
    return (person.fname + " " + person.mname + " " + person.lname + "<br>" + man.no + "<br>" + man.clg);
};
document.write(man.man_all() + "<br>");

//writing methid threee

var man2 = {}
man2["fname"] = " kishan";
man2["mname"] = "d";
man2["name"] = "vasani";
man2["no"] = "180200107118";
man2["clg"] = "gecr";
man2["fullname"] = () => {
    return (person.fname + " " + person.mname + " " + person.lname);
};
man["man2_all"] = () => {
    return (person.fname + " " + person.mname + " " + person.lname + "<br>" + man.no + "<br>" + man.clg);
};
document.write(man["man_all"]() + "<br>");
document.write("threee" + "<br>");


//
var man = {}
man['fname'] = 100;
man['mname'] = 2000;
man['lname'] = 30000;
man['no'] = 180200107118;
man['clg'] = " gecr";
man['fullname'] = () => {
    return (person.fname + " " + person.mname + " " + person.lname);
};
man['man_all'] = () => {
    return (person.fname + " " + person.mname + " " + person.lname + "<br>" + man.no + "<br>" + man.clg);
};
document.write(man.man_all() + "<br>");
document.write("four" + "<br>");
//

var man = { fname: 100, mname: 2000, lname: 30000, no: 180200107118, clg: " gecr" };
document.write(man.fname + "<br>" + man.mname + "<br>" + man.lname + "<br>" + man.no + "<br>" + man.clg + "<br>");
document.write("five" + "<br>");
//
