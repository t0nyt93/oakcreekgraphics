var pt = [ 'Computer Graphics','Artificial Intelligence', 'GLSL Shaders'];  //project types
angular.module('routerApp').controller( 'ProjectsCtrl',[
    '$scope',
    function($scope){
        $scope.message = 'HelloWorld from the projects controller!';
        $scope.projects= [
            {
                'name': pt[0],
                'description': 'Projects involving OpenGL and basic Computer Graphics concepts.',
                'projects':
                [{
                    "name":"Ray Trace Engine",
                    "github" : "https://github.com/t0nyt93/RayTraceEngine",
                    "desc" : "A simple C++ Ray Trace Engine including shadows as well as OpenMP parallelization. \n REQUIRES: Visual Studio, OpenGL, and OpenMP. ",
                }]
            },
            {
                'name': pt[2],
                'description': 'Projects involving a combination of Vertex, Tessellation, Geometry, and Fragment shaders...',
                'projects':
                [{
                    "name":"Image Processing",
                    "project_type":pt[2],
                    "github" : "https://github.com/t0nyt93/Image-Modification",
                    "desc" : " Bitmap Manipulation using GLSL. A circular or Rectangular \"Magic Lens\" provides the ability to rotate, magnify, and sharpen a subsection of the image. \n REQUIRES: OpenGL, GlMan ( See the About Page ), Windows."
                },
                {
                    "name":"Bump Mapping",
                    "project_type":pt[2],
                    "github" : "TBA",
                    "desc" : "Basic Image Mapping using Displacement and Bump mapping techniques"
                },
                {
                    "name":"Geometric Displacement Shader",
                    "project_type":pt[2],
                    "github" : "https://github.com/t0nyt93/Displacement-and-Noise",
                    "desc" : "Sends Cosine waves along the X and Y coordinates of a flat surface\. Their is also control over lighting which allows for the use of Bump Mapping."
                }
            ]},
            {
                'name': pt[1],
                'description': 'Python scripts focused on basic Artificial Intelligence topics such as Search Algorithms and Learning Algorithms.'
                'projects':
                [{
                    "name":"Basic Search Algorithms",
                    "project_type":pt[1],
                    "github" : "https://github.com/t0nyt93/MissionairiesAndCannibals",
                    "desc" : "Python Application which compares the runtime of Breadth-First, Depth-First, Iterative Deepening, and A-Star search Algorithms. These Algorithms are implemented in a game of Missionaries and Cannibals, the scripts usage is available in the Github README."
                },
                    {
                        "name":"Sarcasm Detection Learning Algorithm",
                        "project_type":pt[1],
                        "github" : "https://github.com/t0nyt93/SarcasmDetector",
                        "desc" : "Learning Algorithm written in Python that is meant to determine where or not a sentence is sarcastic based on training data. ",
                    }]
                }];


                $scope.getProjects = function( project_type ){
                    var return_list = [];
                    for( var i = 0; i < $scope.projects.length; i++)
                    {
                        if ($scope.project_type == project_type )
                        {
                            return_list.push($scope.projects[i]);
                        }
                    }
                    return return_list;
                };

            }]);


