from collections import deque
n, k = map(int,input().split())
visited = [-1] * 100001

def bfs(v):
    q = deque([v])
    visited[v] = 0
    while q:
        v = q.popleft()
        if v == k:
            print(visited[v])
            exit(0)
        if 0 <= v-1 < 100001 and visited[v-1] == -1:
            visited[v-1] = visited[v]+1
            q.append(v-1)
        if 0 < v*2 < 100001 and visited[v*2] == -1:
            visited[v*2] = visited[v]
            q.appendleft(v*2)
        if 0 <= v+1 < 100001 and visited[v+1] == -1:
            visited[v+1] = visited[v]+1
            q.append(v+1)

# 0 1(8) - 7(28) - 27
  
bfs(n)