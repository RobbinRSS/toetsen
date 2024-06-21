import math

import math

def calc_tanking(kilometers_per_liter, tankinhoud, te_rijden_afstand):
    maximale_afstand = kilometers_per_liter * tankinhoud

    if te_rijden_afstand <= maximale_afstand:
        return 0  # Je hoeft 0 keer te tanken
    else:
        benodigde_tankbeurten = math.ceil(te_rijden_afstand / maximale_afstand) - 1
        return benodigde_tankbeurten

def testing():
    print(calc_tanking(8, 10, 5))
    print(calc_tanking(10, 50, 1000))
    print(calc_tanking(3, 1, 9))  
    print(calc_tanking(12, 70, 12000))
    print(calc_tanking(32, 27, 1000))
    print(calc_tanking(10, 7, 10000000000))
    print(calc_tanking(23, 3, 2000))
    print(calc_tanking(2, 10, 30))
    print(calc_tanking(5, 50, 50000000))
    print(calc_tanking(21, 7, 100000))

testing()