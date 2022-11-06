a = [int(i) for i in input().split()]
b = [int(i) for i in input().split()]
c = sorted(list(set(a) | set(b)))
print(' '.join(map(str, c)))
