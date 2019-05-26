goDashboard(name){
    var link = "";
    if (name == "admin"){
        link = "/dashboard";
    }
    else {
        link = "/storyboard";
    }
    return link;
}