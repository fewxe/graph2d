import GraphController from './GraphController.js';
import UI from './Ui.js';
import Graph from './Graph.js';

class App {
    run(){
        window.onload = () => {
            let container = document.getElementById('ui-container');
            let canvas = document.getElementById('canvas');
        
            let graph = new Graph(canvas);
            let controller = new GraphController(graph);
            
            new UI(controller, container);
            
            controller.render();
        };
    }
}

let app = new App();
app.run()