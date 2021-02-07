class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeLoop(head) {
  // Initialize ptr1 and ptr2 to head node.
  let ptr1 = head;
  let ptr2 = head;
  // Boolean to check if there a loop exists in the given Linked List.
  let hasLoop = 0;
  // Traverse the list until ptr2 or ptr2.next is null.
  while (ptr2 != null && ptr2.next != null) {
    // Move ptr1 forward by one node.
    ptr1 = ptr1.next;
    // Move ptr2 forward by two nodes.
    ptr2 = ptr2.next.next;
    // Check if ptr1 and ptr2 meet at some node, then there is a loop in the Linked List and So make flag true and break.
    if (ptr1 == ptr2) {
      hasLoop = 1;
      break;
    }
  }
  // When there is a loop in the Linked List.
  if (hasLoop) {
    // Assign head to ptr1.
    ptr1 = head;
    // Loop until next of ptr1 and ptr2 are not equal.
    while (ptr1.next != ptr2.next) {
      ptr1 = ptr1.next;
      ptr2 = ptr2.next;
    }
    // Make next of ptr2 that is last node of Linked List NULL.
    ptr2.next = null;
  }
}