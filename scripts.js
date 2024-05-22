
// For random color
function randomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}


// For partition
function partitionSplitting(direction, partition) {
      const parent = partition.parentElement;
      const isVertical = direction === 'V';

      // new partition creation
      const newPartition = document.createElement('div');
      newPartition.className = 'partition';
      newPartition.style.backgroundColor = randomColor();
      newPartition.style.flexGrow = 1;
      newPartition.innerHTML = `
        <div class="buttons">
          <button class="split-btn" onclick="partitionSplitting('V', this.parentElement.parentElement)">V</button>
          <button class="split-btn" onclick="partitionSplitting('H', this.parentElement.parentElement)">H</button>
          <button class="remove-btn" onclick="removePartition(this.parentElement.parentElement)">-</button>
        </div>
      `;



      // split direction
      if (isVertical) {
            partition.style.flexDirection = 'row';
      } else {
            partition.style.flexDirection = 'column';
      }



      // further partition with the same styling as the original
      const furtherPartition = document.createElement('div');
      furtherPartition.className = 'partition';
      furtherPartition.style.backgroundColor = partition.style.backgroundColor;
      furtherPartition.style.flexGrow = 1;
      furtherPartition.innerHTML = partition.innerHTML;


      // partition's background color change
      partition.style.backgroundColor = randomColor();


     // append the new partitions
      partition.innerHTML = '';
      partition.appendChild(furtherPartition);
      partition.appendChild(newPartition);
}




// Remove a partition
function removePartition(partition) {
      const parent = partition.parentElement;
      if (parent.childElementCount > 1) {
            parent.removeChild(partition);
      }
}
