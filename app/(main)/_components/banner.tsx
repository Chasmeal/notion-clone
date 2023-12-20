'use client';

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useMutation } from 'convex/react';

import { Id } from '@/convex/_generated/dataModel';
import { api } from '@/convex/_generated/api';

import { Button } from '@/components/ui/button';
import { ConfirmModal } from '@/components/modals/confirm-modal';

interface BannerProps {
	documentId: Id<'documents'>;
}

export const Banner = ({ documentId }: BannerProps) => {
	const router = useRouter();

	const restore = useMutation(api.documents.restore);
	const remove = useMutation(api.documents.remove);

	const onRestore = () => {
		const promise = restore({ id: documentId });

		toast.promise(promise, {
			loading: 'Restoring a note...',
			success: 'Note restored!',
			error: 'Failed to restore a note',
		});

		router.push('/documents');
	};

	const onRemove = () => {
		const promise = remove({ id: documentId });

		toast.promise(promise, {
			loading: 'Removing a note...',
			success: 'Note removed!',
			error: 'Failed to remove a note',
		});

		router.push('/documents');
	};

	return (
		<div className='w-full bg-rose-500 flex items-center justify-center gap-x-2 p-2 text-white'>
			<p>This page is in the Trash.</p>
			<Button
				onClick={onRestore}
				variant='outline'
				size='sm'
				className='border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal'>
				Restore page
			</Button>
			<ConfirmModal onConfirm={onRemove}>
				<Button
					variant='outline'
					size='sm'
					className='border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal'>
					Remove page
				</Button>
			</ConfirmModal>
		</div>
	);
};
