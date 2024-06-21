from get_destination_by_name import get_destination as get_location
from get_all_cars import get_all_cars

def list_sahara_cars(destination_name: str) -> list:
    # code om de afstand op te zoeken in de tabel destinations
    destination = get_location(destination_name)
    if not destination:
        print(f'{destination} not found')
        return []
    print(destination)
    # code om de cars te selecteren die de afstand in één keer kunnen overbruggen
    
    distance = destination[2] # distance
    cars = []
    all_cars = get_all_cars()

    for car in all_cars:
        max_distance = car[3] * car[4] # usage * volume
        if max_distance >= distance:
            cars.append(car)
    
    return cars
 
cars = list_sahara_cars('Cairo')