export default class Utils {
    constructor() {}
    
    getIntersection (A, B, C, D, polygon1, polygon2) {

        // A e C -> polígono 1
        // B e D -> polígono 2

        let ux = ((C.x*A.y - A.x*C.y)*(B.x - D.x) + (B.x*D.y - D.x*B.y)*(A.x - C.x)) / ((A.y - C.y)*(B.x - D.x) - (B.y - D.y)*(A.x - C.x));
        let uy = (ux*(B.y - D.y) + B.x*D.y - D.x*B.y) / (B.x - D.x)

        let intersectionPoint = {x: ux, y: uy}

        let pointInside = this.pointInside(A, B, C, D, polygon1, polygon2);

        return {
            pointInside,
            ...intersectionPoint
        };

    }

    pointInside (A, B, C, D, polygon1, polygon2) {

        let size;
        let count;

        // checking if A or C is inside polygon2
        size = polygon2.length;
        count = 0;
        
        for (let j = 0; j < 2; j++) {

            let x = j == 0 ? A.x : C.x;
            let y = j == 0 ? A.y : C.y;

            for (let i = 0; i < size - 1; i++) {
                let side = {
                    a: {
                        x: polygon2[i].x,
                        y: polygon2[i].y
                    },
                    b: {
                        x: polygon2[i+1].x,
                        y: polygon2[i+1].y
                    }
                }

                let x1 = side.a.x,
                    x2 = side.b.x,
                    y1 = side.a.y,
                    y2 = side.b.y;

                if (y < y1 != y < y2 && x < (x2-x1) * (y-y1) / (y2-y1) + x1)
                    count++;
            }

            if (count % 2 != 0){
                return {
                    status: true,
                    x,
                    y
                }
            }
            else
                continue;
        }
        
        // checking if B or D is inside polygon1
        size = polygon1.length;
        count = 0;
        
        for (let j = 0; j < 2; j++) {

            let x = j == 0 ? B.x : D.x;
            let y = j == 0 ? B.y : D.y;

            for (let i = 0; i < size - 1; i++) {
                let side = {
                    a: {
                        x: polygon1[i].x,
                        y: polygon1[i].y
                    },
                    b: {
                        x: polygon1[i+1].x,
                        y: polygon1[i+1].y
                    }
                }

                let x1 = side.a.x,
                    x2 = side.b.x,
                    y1 = side.a.y,
                    y2 = side.b.y;

                if (y < y1 != y < y2 && x < (x2-x1) * (y-y1) / (y2-y1) + x1)
                    count++;
            }

            if (count % 2 != 0){
                return {
                    status: true,
                    x,
                    y
                }
            }
            else
                continue;
        }

        return {
            status: false,
            x: null,
            y: null
        }
    }

    getTriangleObjectPoints (object) {

        let position = object.position;
        let rotation = object.rotation;

        let rotationOfA = this.rotation({x: object.userData.a.x, y: object.userData.a.y}, rotation.z)
        let rotationOfB = this.rotation({x: object.userData.b.x, y: object.userData.b.y}, rotation.z)
        let rotationOfC = this.rotation({x: object.userData.c.x, y: object.userData.c.y}, rotation.z)

        let vertexA = { x: rotationOfA.x + position.x, y: rotationOfA.y + position.y }
        let vertexB = { x: rotationOfB.x + position.x, y: rotationOfB.y + position.y }
        let vertexC = { x: rotationOfC.x + position.x, y: rotationOfC.y + position.y }

        return {
            vertexA,
            vertexB,
            vertexC
        };
    }

    rotation (points, angle) {

        let x = points.x * Math.cos(angle) - points.y * Math.sin(angle);
        let y = points.x * Math.sin(angle) + points.y * Math.cos(angle);

        return {
            x,
            y
        }
    }

    getIntersectionPointsAndInsidePoints (object, answer, type, figureOffset) {

        if (type == 'triangle') {

            let internPoints = [];
            let intersectPoints = [];

            let auxAnswer = {
                a: {
                    x: answer.a.x + figureOffset.x,
                    y: answer.a.y + figureOffset.y
                },
                b: {
                    x: answer.b.x + figureOffset.x,
                    y: answer.b.y + figureOffset.y
                },
                c: {
                    x: answer.c.x + figureOffset.x,
                    y: answer.c.y + figureOffset.y
                }
            }

            let trianglePoints = this.getTriangleObjectPoints (object);

            let answerEdges = [
                {x: auxAnswer.a.x, y: auxAnswer.a.y},
                {x: auxAnswer.b.x, y: auxAnswer.b.y},
                {x: auxAnswer.c.x, y: auxAnswer.c.y}
            ]
            let objectEdges = [
                {...trianglePoints.vertexA},
                {...trianglePoints.vertexB},
                {...trianglePoints.vertexC}
            ]

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let A = objectEdges[i];
                    let B = answerEdges[j];
                    let C = objectEdges[i == 2 ? 0 : (i + 1)];
                    let D = answerEdges[j == 2 ? 0 : (j + 1)];
                    let intersection = this.getIntersection(A, B, C, D, objectEdges, answerEdges);
                    
                    if (intersection.pointInside.status == true && !isNaN(intersection.x) && !isNaN(intersection.y) && intersection.x < 100 && intersection.y < 100) {
                        console.log(intersection)
                        intersectPoints.push({ x: intersection.x, y: intersection.y });
                        //internPoints.push({ x: objectEdges[i].x, y: objectEdges[i].y }); //corrigir!!!!!!
                        continue;
                    }

                }
            }

            return intersectPoints;

        }
        else {
            return false;
        }

    }


    
}