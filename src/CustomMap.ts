//Instruction to every other class on how they can be an argument to 'addMarker'
interface Mappable {
    location : {
        lat: number,
        lng: number
    };
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;


    constructor(divId: string) {
        const input = document.getElementById(divId) as HTMLInputElement;

        const el1: HTMLElement = input;

        const el2: Element = input;

        function example(el: Element) {
            return el;
        }

        example(input);

        this.googleMap = new google.maps.Map(input, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        });

        marker.addListener('click', (content) => {
            const infoWindow = new google.maps.InfoWindow({
                content:  mappable.markerContent()
            });
            infoWindow.open(this.googleMap, marker);
        });
    }
}